import { Injectable } from '@angular/core';
import { DashboardsService } from "../../dashboards.service";

@Injectable({
  providedIn: 'root'
})
export class ObjectivesService {

  constructor(private dashboardService: DashboardsService) { }

  passComponent(component: any) {
    this.dashboardService.setComponent(component)
  }

  alert(component: string) {
    console.log(component + ' ALERT')
  }
}
