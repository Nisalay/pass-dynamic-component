import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChangesRoutingModule } from './changes-routing.module';
import { ChangesComponent } from './changes.component';
import { FiltersComponent } from "./filters/filters.component";


@NgModule({
  declarations: [
    ChangesComponent,
    FiltersComponent
  ],
  imports: [
    CommonModule,
    ChangesRoutingModule
  ]
})
export class ChangesModule { }
