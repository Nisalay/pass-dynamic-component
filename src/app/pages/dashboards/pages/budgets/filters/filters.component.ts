import { Component, OnInit } from '@angular/core';
import { BudgetsService } from "../budgets.service";

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  constructor(private budgetsService: BudgetsService) { }

  ngOnInit(): void {
  }

  alert() {
    this.budgetsService.alert('BUDGETS');
  }
}
