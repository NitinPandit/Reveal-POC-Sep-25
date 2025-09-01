export interface DataSource {
  id: number;
  data_source_id: string;
  title: string;
  original_name: string;
  saved_name: string;
  saved_path: string;
  abs_path: string;
  uploaded_at: string; // ISO datetime string from API
}
