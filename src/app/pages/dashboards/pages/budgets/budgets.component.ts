import { Component, OnInit } from '@angular/core';
import { BudgetsService } from "./budgets.service";
import { FiltersComponent } from "./filters/filters.component";

@Component({
  selector: 'app-budgets',
  templateUrl: './budgets.component.html',
  styleUrls: ['./budgets.component.scss']
})
export class BudgetsComponent implements OnInit {

  constructor(private budgetsService: BudgetsService) { }

  ngOnInit(): void {
    this.budgetsService.passComponent(FiltersComponent)
  }

}
