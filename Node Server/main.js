var express = require('express');
var cors = require('cors');
var reveal = require('reveal-sdk-node');
var multer = require('multer');
var path = require('path');
var fs = require('fs');
const mysql = require('mysql2/promise');

const app = express();

app.use(cors()); // DEVELOPMENT only! In production, configure appropriately.

// Create a MySQL connection pool
// This pool will be used to manage connections to the MySQL database.
const pool = mysql.createPool({
	host: 'localhost',
	user: 'root',
	password: 'MySQL2025',
	database: 'techm',
	waitForConnections: true,
	connectionLimit: 10,
});

const revealOptions = {
	localFileStoragePath: "data", // path to store local files
	license: "--- Add Your License Key ---",
}


// ensure data folder exists
const DATA_DIR = path.join(process.cwd(), 'data');
if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });

// multer storage config
const storage = multer.diskStorage({
	destination: (req, file, cb) => cb(null, DATA_DIR),
	filename: (req, file, cb) => {
		const safeName = Date.now() + '-' + file.originalname.replace(/[^a-zA-Z0-9._-]/g, '_');
		cb(null, safeName);
	}
});
const upload = multer({ storage });


app.post('/api/upload', upload.single('file'), async (req, res) => {
	try {
		// file info from multer
		const fileInfo = req.file;

		// form fields
		const { dataSourceID, dataSourceTitle } = req.body;

		console.log('File:', fileInfo);
		console.log('dataSourceID:', dataSourceID);
		console.log('dataSourceTitle:', dataSourceTitle);



		// Build metadata that matches your table columns
		const row = {
			data_source_id: dataSourceID,
			title: dataSourceTitle,
			original_name: req.file.originalname,
			saved_name: req.file.filename,
			saved_path: `/data/${req.file.filename}`, // public/static path if you serve /data
			abs_path: req.file.path,                // absolute server path
			uploaded_at: new Date()
		};

		// INSERT (parameterized)
		const sql = `
      INSERT INTO datasources
        (data_source_id, title, original_name, saved_name, saved_path, abs_path, uploaded_at)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `;
		const params = [
			row.data_source_id,
			row.title,
			row.original_name,
			row.saved_name,
			row.saved_path,
			row.abs_path,
			row.uploaded_at
		];

		const [result] = await pool.execute(sql, params);

		return res.status(201).json({
			message: 'Uploaded and saved to MySQL',
			id: result.insertId,
			dataSource: row
		});
	} catch (err) {
		console.error('UPLOAD ERROR', err);
		return res.status(500).json({ error: 'DB insert failed' });
	}
});


// ✅ Get all data sources
app.get('/api/getdatasources', async (req, res) => {
  try {
    const [rows] = await pool.execute(
      'SELECT * FROM datasources ORDER BY uploaded_at DESC'
    );
    res.json(rows);
  } catch (err) {
    console.error('GET DATASOURCES ERROR', err);
    res.status(500).json({ error: 'Failed to fetch data sources' });
  }
});

// Endpoint to get the list of dashboards
// This endpoint reads the 'dashboards' directory and returns the names of the files without extensions.
app.get('/api/dashboards', (req, res) => {
    const dashboardsPath = path.join(__dirname, 'dashboards');

    fs.readdir(dashboardsPath, (err, files) => {
        if (err) {
            console.error('Error reading dashboards folder:', err);
            return res.status(500).json({ error: 'Unable to read dashboards folder' });
        }

        // Remove extensions and return just names
        const fileNames = files
            .filter(file => fs.lstatSync(path.join(dashboardsPath, file)).isFile()) // only files
            .map(file => path.parse(file).name);

        res.json(fileNames);
    });
});


app.use('/reveal', reveal(revealOptions));

app.listen(8088, () => {
	console.log(`Tech Mahindra Reveal server accepting http requests on port 8088`);
});