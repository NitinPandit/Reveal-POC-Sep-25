import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BIMasterRoutingModule } from './bi-master-routing.module';
import { BIMasterComponent } from './bi-master.component';
import { DashboardsComponent } from './dashboards/dashboards.component';
import { IgxCardModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxPaginatorModule, IgxGridModule, IgxCheckboxModule, IgxInputGroupModule, IgxNavbarModule, IgxToggleModule, IgxNavigationDrawerModule } from 'igniteui-angular';
import { DatasourcesComponent } from './datasources/datasources.component';
import { BIStudioComponent } from './bi-studio/bi-studio.component';
import { ViewDashboardComponent } from './view-dashboard/view-dashboard.component';
import { RevealViewComponent } from 'reveal-sdk-wrappers-angular';

@NgModule({
  declarations: [
    BIMasterComponent,
    DashboardsComponent,
    DatasourcesComponent,
    BIStudioComponent,
    ViewDashboardComponent
  ],
  imports: [
    CommonModule,
    BIMasterRoutingModule,
    IgxCardModule,
    IgxButtonModule,
    IgxRippleModule,
    IgxIconModule,
    IgxPaginatorModule,
    FormsModule,
    IgxGridModule,
    IgxCheckboxModule,
    IgxInputGroupModule,
    RevealViewComponent,
    IgxNavbarModule,
    IgxToggleModule,
    IgxNavigationDrawerModule
  ]
})
export class BIMasterModule { }
