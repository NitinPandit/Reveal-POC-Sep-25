import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BIMasterComponent } from './bi-master.component';
import { DashboardsComponent } from './dashboards/dashboards.component';
import { DatasourcesComponent } from './datasources/datasources.component';
import { BIStudioComponent } from './bi-studio/bi-studio.component';
import { ViewDashboardComponent } from './view-dashboard/view-dashboard.component';

export const routes: Routes = [
  { path: '', component: BIMasterComponent, children: [
      { path: '', redirectTo: 'dashboards', pathMatch: 'full' },
      { path: 'dashboards', component: DashboardsComponent, data: { text: 'Dashboards' } },
      { path: 'datasources', component: DatasourcesComponent, data: { text: 'Datasources' } },
      { path: 'bi-studio', component: BIStudioComponent, data: { text: 'Bi-Studio' } },
      { path: 'view-dashboard/:name', component: ViewDashboardComponent, data: { text: 'View-Dashboard' } },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BIMasterRoutingModule { }
