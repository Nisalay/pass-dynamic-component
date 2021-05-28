import {
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { DashboardsService } from "./dashboards.service";
import { Observable } from "rxjs";

@Component({
  selector: 'app-dashboards',
  templateUrl: './dashboards.component.html',
  styleUrls: ['./dashboards.component.scss']
})
export class DashboardsComponent implements OnInit {
  @ViewChild('componentContainer', { read: ViewContainerRef, static: true })
  private componentContainer!: ViewContainerRef;

  public component$!: Observable<any> | null;
  private componentRef!: ComponentRef<any>;

  constructor(
    private dashboardsService: DashboardsService,
    private resolver: ComponentFactoryResolver
  ) { }

  ngOnInit(): void {
    this.component$ = this.dashboardsService.getComponent();
    this.component$.subscribe((component) => {
      const factory: any = this.resolver.resolveComponentFactory(component as any);
      this.componentContainer.clear();
      this.componentRef = this.componentContainer.createComponent(factory);
    })
  }

}
