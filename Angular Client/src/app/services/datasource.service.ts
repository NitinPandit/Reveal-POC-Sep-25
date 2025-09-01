import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { DataSource } from '../models/datasources/datasource.model';

@Injectable({
  providedIn: 'root'
})
export class DataSourceService {
  private baseUrl = environment.apiUrl; // e.g. http://localhost:8088/api

  constructor(private http: HttpClient) {}

  // Get all data sources
  getAllDataSources(): Observable<DataSource[]> {
    return this.http.get<DataSource[]>(`${this.baseUrl}/getdatasources`);
  }

  // Get one by id (if you create endpoint /getdatasources/:id)
  getDataSourceById(id: number): Observable<DataSource> {
    return this.http.get<DataSource>(`${this.baseUrl}/getdatasources/${id}`);
  }
}
