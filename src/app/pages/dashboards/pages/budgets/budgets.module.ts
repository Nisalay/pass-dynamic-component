import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BudgetsRoutingModule } from './budgets-routing.module';
import { BudgetsComponent } from './budgets.component';
import { FiltersComponent } from './filters/filters.component';


@NgModule({
  declarations: [
    BudgetsComponent,
    FiltersComponent
  ],
  imports: [
    CommonModule,
    BudgetsRoutingModule
  ]
})
export class BudgetsModule { }
