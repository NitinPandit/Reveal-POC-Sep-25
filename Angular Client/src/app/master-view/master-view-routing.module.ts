import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MasterViewComponent } from './master-view.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
  { path: '', component: MasterViewComponent, children: [
      { path: '', redirectTo: 'about', pathMatch: 'full' },
      { path: 'about', component: AboutComponent, data: { text: 'About' } },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterViewRoutingModule { }
