import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import { SharedFilterComponent } from "./shared-filter.component";
import { filter } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SharedFilterService {
  private filterSubmit$ = new BehaviorSubject<any>(null)

  constructor() { }

  getComponent() {
    return SharedFilterComponent;
  }

  submit(data: any) {
    this.filterSubmit$.next(data)
  }

  filterSubmitted() {
    return this.filterSubmit$.pipe(
      filter(Boolean)
    )
  }
}
