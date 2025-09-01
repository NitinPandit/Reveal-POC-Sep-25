import { Component, OnDestroy, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { EmployeesType } from '../../models/northwind/employees-type';
import { NorthwindService } from '../../services/northwind.service';
import { FileUploadService } from '../../services/file-upload.service';
import { DataSource } from '../../models/datasources/datasource.model';
import { DataSourceService } from '../../services/datasource.service';

@Component({
  selector: 'app-datasources',
  standalone: false,
  templateUrl: './datasources.component.html',
  styleUrls: ['./datasources.component.scss']
})
export class DatasourcesComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  @ViewChild('fileUpload') fileUpload!: ElementRef<HTMLInputElement>;

  public DSId?: string;
  public DSTitle?: string;
  public DSFileURL?: string;
  public dataSourceFileVisible: boolean = false;
  public dataSourceFileURLVisible: boolean = true;
  public northwindEmployees: EmployeesType[] = [];

  constructor(
    private northwindService: NorthwindService,
    private fileUploadService: FileUploadService,
    private dsService: DataSourceService
  ) {}

  dataSources: DataSource[] = [];

  ngOnInit() {

    this.clickCheckbox();
    this.dsService.getAllDataSources().pipe(takeUntil(this.destroy$)).subscribe(
      data => {
        this.dataSources = data;
        console.log(this.dataSources);
      }
    );
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public clickCheckbox(): void {
    this.dataSourceFileVisible = !this.dataSourceFileVisible;
    this.dataSourceFileURLVisible = !this.dataSourceFileURLVisible;
  }

  public save(): void {
    if (this.dataSourceFileVisible) {
      const fileInput = this.fileUpload.nativeElement;
      if (fileInput.files && fileInput.files.length > 0) {
        const file = fileInput.files[0];
        const dsId = this.DSId || '';
        const dsTitle = this.DSTitle || '';
        this.fileUploadService.upload(dsId, dsTitle, file).subscribe({
          next: (response) => {
            console.log('Upload successful', response);
            // Handle success
          },
          error: (error) => {
            console.error('Upload failed', error);
            // Handle error
          }
        });
      }
    } else {
      // Handle other save logic
    }
  }
}
