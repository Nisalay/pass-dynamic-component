import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardsRoutingModule } from './dashboards-routing.module';
import { DashboardsComponent } from './dashboards.component';
import { SharedFilterModule } from "../../shared/components/shared-filter";


@NgModule({
  declarations: [
    DashboardsComponent
  ],
  imports: [
    CommonModule,
    DashboardsRoutingModule,
    SharedFilterModule
  ]
})
export class DashboardsModule { }
