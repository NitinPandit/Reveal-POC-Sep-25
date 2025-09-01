import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterViewRoutingModule } from './master-view-routing.module';
import { MasterViewComponent } from './master-view.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    MasterViewComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    MasterViewRoutingModule
  ]
})
export class MasterViewModule { }
