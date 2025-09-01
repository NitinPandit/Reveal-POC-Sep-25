create database TechM
USE TechM
CREATE TABLE IF NOT EXISTS datasources (
  id            BIGINT AUTO_INCREMENT PRIMARY KEY,
  data_source_id   VARCHAR(100) NOT NULL,
  title            VARCHAR(255) NOT NULL,
  original_name    VARCHAR(255) NOT NULL,
  saved_name       VARCHAR(255) NOT NULL,
  saved_path       VARCHAR(512) NOT NULL,   -- e.g. /data/file__ts.png
  abs_path         VARCHAR(1024) NOT NULL,  -- server path for jobs
  uploaded_at      DATETIME NOT NULL
);
select * from datasources