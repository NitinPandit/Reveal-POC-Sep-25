import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { environment } from '../../../environments/environment';
import { DataSource } from '../../models/datasources/datasource.model';
import { DataSourceService } from '../../services/datasource.service';

declare let $: any;



@Component({
  selector: 'app-bi-studio',
  standalone: false,
  templateUrl: './bi-studio.component.html',
  styleUrls: ['./bi-studio.component.scss']
})
export class BIStudioComponent {

  headers: any = {};
  apiURL: string = environment.apiUrl;
  revealBaseURL: string = environment.revealBaseURL;

  constructor(private http: HttpClient, private dsService: DataSourceService) {
  }

  ngOnInit(): void {
    $.ig.RevealSdkSettings.setBaseUrl(this.revealBaseURL);

    $.ig.RevealSdkSettings.setAdditionalHeadersProvider((url: any) => {
      return this.headers;
    });
    this.dsService.getAllDataSources().subscribe(data => {
      this.dataSources = data;
    });
  }

  dataSources: DataSource[] = [];


  @ViewChild('revealView') el!: ElementRef;
  ngAfterViewInit() {


    var revealView = new $.ig.RevealView(this.el.nativeElement);
    revealView.startInEditMode = true;


    // revealView.onDataSourcesRequested = (callback: any) => {

    //     const fileDS = new $.ig.RVLocalFileDataSourceItem();
    //     fileDS.uri = `local:/1756383018787-New_FY_25_Marketing_Report.xlsx`;

    //     var excelDataSourceItem = new $.ig.RVExcelDataSourceItem(fileDS);
    //     excelDataSourceItem.title = "Testing Local Excel File";
    //     excelDataSourceItem.id = "DummyDSId"

    //   callback(new $.ig.RevealDataSources([], [excelDataSourceItem], true));
    // }

    revealView.onDataSourcesRequested = (callback: any) => {

      let allDataSources: any[] = [];

      this.dataSources.forEach(ds => {
        const fileDS = new $.ig.RVLocalFileDataSourceItem();
        fileDS.uri = `local:/${ds.saved_name}`;

        var excelDataSourceItem = new $.ig.RVExcelDataSourceItem(fileDS);
        excelDataSourceItem.title = ds.title;
        excelDataSourceItem.id = ds.id.toString();

        allDataSources.push(excelDataSourceItem);
      });

      //console.log(this.dataSources);


      // const fileDS = new $.ig.RVLocalFileDataSourceItem();
      // fileDS.uri = `local:/${this.dataSources[0].saved_name}`;

      // var excelDataSourceItem = new $.ig.RVExcelDataSourceItem(fileDS);
      // excelDataSourceItem.title = this.dataSources[0].title;
      // excelDataSourceItem.id = this.dataSources[0].id.toString();

      // this.dataSources.forEach(ds => {
      //   const fileDS = new $.ig.RVLocalFileDataSourceItem();
      //   fileDS.uri = `local:/${ds.saved_name}`;

      //   var excelDataSourceItem = new $.ig.RVExcelDataSourceItem(fileDS);
      //   excelDataSourceItem.title = ds.title;
      //   excelDataSourceItem.id = ds.id.toString();

      //   allDataSources.push(excelDataSourceItem);
      // });

      callback(new $.ig.RevealDataSources([], allDataSources, true));
    }
  }

}
