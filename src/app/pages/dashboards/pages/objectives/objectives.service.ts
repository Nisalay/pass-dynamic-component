import { Injectable } from '@angular/core';
import { DashboardsService } from "../../dashboards.service";
import { SharedFilterService } from "../../../../shared/components/shared-filter";

@Injectable({
  providedIn: 'root'
})
export class ObjectivesService {

  constructor(
    private dashboardService: DashboardsService,
    private sharedFilterService: SharedFilterService
  ) { }

  passFilterComponent() {
    this.dashboardService.setComponent(
      this.sharedFilterService.getComponent()
    )
  }

  shaderFilterSubmitted() {
    return this.sharedFilterService.filterSubmitted()
  }

  alert(component: string) {
    console.log(component + ' ALERT')
  }
}
