import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObjectivesComponent } from './objectives.component';

const routes: Routes = [{ path: '', component: ObjectivesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ObjectivesRoutingModule { }
