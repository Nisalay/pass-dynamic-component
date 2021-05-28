import { Component, OnInit } from '@angular/core';
import { ObjectivesService } from "./objectives.service";
import { FiltersComponent } from "./filters/filters.component";

@Component({
  selector: 'app-objectives',
  templateUrl: './objectives.component.html',
  styleUrls: ['./objectives.component.scss']
})
export class ObjectivesComponent implements OnInit {

  constructor(private objectivesService: ObjectivesService) { }

  ngOnInit(): void {
    this.objectivesService.passComponent(FiltersComponent)
  }
}
