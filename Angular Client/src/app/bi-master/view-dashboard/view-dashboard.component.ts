import { Component } from '@angular/core';
import { RevealViewOptions } from 'reveal-sdk-wrappers';
import { environment } from '../../../environments/environment';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-view-dashboard',
  standalone: false,
  templateUrl: './view-dashboard.component.html',
  styleUrls: ['./view-dashboard.component.scss']
})
export class ViewDashboardComponent {
  dashboardOptions: RevealViewOptions = {
    visualizations: {
      menu: {
        copy: false,
        duplicate: false
      }
    }
  };
dashboardName: string='Sales';

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.dashboardName = params['name'];
    });
    $.ig.RevealSdkSettings.setBaseUrl(environment.revealBaseURL);
    //$.ig.RevealSdkSettings.setBaseUrl('https://samples.revealbi.io/upmedia-backend/reveal-api/');
  }
} 
