import { Component, OnInit } from '@angular/core';
import { ObjectivesService } from "../objectives.service";

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  constructor(private objectivesService: ObjectivesService) { }

  ngOnInit(): void {
  }

  alert() {
    this.objectivesService.alert('OBJECTIVES');
  }
}
