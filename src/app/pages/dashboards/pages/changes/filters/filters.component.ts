import { Component, OnInit } from '@angular/core';
import { BudgetsService } from "../../budgets/budgets.service";
import { ChangesService } from "../changes.service";

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  constructor(private changesService: ChangesService) { }

  ngOnInit(): void {
  }

  alert() {
    this.changesService.alert('CHANGES');
  }
}
