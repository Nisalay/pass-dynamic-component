import { Component, OnInit } from '@angular/core';
import { SharedFilterService } from "./shared-filter.service";

@Component({
  selector: 'app-shared-filter',
  templateUrl: './shared-filter.component.html',
  styleUrls: ['./shared-filter.component.scss']
})
export class SharedFilterComponent implements OnInit {

  constructor(
    private sharedFilterService: SharedFilterService
  ) { }

  ngOnInit(): void {
  }

  submit() {
    this.sharedFilterService.submit({
      data: {
        isWorks: true
      }
    })
  }
}
