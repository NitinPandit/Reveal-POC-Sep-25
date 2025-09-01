// src/app/services/reveal-dashboards.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RevealDashboardsService {
  private baseUrl = environment.apiUrl; 

  constructor(private http: HttpClient) {}

  // Get all dashboard names
  getDashboards(): Observable<string[]> {
    return this.http.get<string[]>(`${this.baseUrl}/dashboards`);
  }
}
