import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ObjectivesRoutingModule } from './objectives-routing.module';
import { ObjectivesComponent } from './objectives.component';
import { FiltersComponent } from "./filters/filters.component";


@NgModule({
  declarations: [
    ObjectivesComponent,
    FiltersComponent
  ],
  imports: [
    CommonModule,
    ObjectivesRoutingModule
  ]
})
export class ObjectivesModule { }
