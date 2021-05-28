import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs";
import { filter } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class DashboardsService {
  private component$ = new BehaviorSubject<any>(null);

  constructor() { }

  getComponent(): Observable<any> {
    return this.component$.pipe(
      filter(Boolean)
    );
  }

  setComponent(component: any): void {
    this.component$.next(component);
  }
}
