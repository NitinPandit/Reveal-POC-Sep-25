import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  private apiUrl = `${environment.apiUrl}/upload`;

  constructor(private http: HttpClient) { }

  upload(dataSourceID:string, dataSourceTitle:string, file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file, file.name);
    formData.append('dataSourceID', dataSourceID);
    formData.append('dataSourceTitle', dataSourceTitle);

    return this.http.post(this.apiUrl, formData);
  }
}
