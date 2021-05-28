import { Component, OnInit } from '@angular/core';
import { ChangesService } from "./changes.service";
import { FiltersComponent } from "./filters/filters.component";

@Component({
  selector: 'app-changes',
  templateUrl: './changes.component.html',
  styleUrls: ['./changes.component.scss']
})
export class ChangesComponent implements OnInit {

  constructor(private changesService: ChangesService) { }

  ngOnInit(): void {
    this.changesService.passComponent(FiltersComponent)
  }

}
