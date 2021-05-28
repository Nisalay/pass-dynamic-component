import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardsComponent } from './dashboards.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardsComponent,
    children: [
      { path: 'budgets', loadChildren: () => import('./pages/budgets/budgets.module').then(m => m.BudgetsModule) },
      { path: 'objectives', loadChildren: () => import('./pages/objectives/objectives.module').then(m => m.ObjectivesModule) },
      { path: 'changes', loadChildren: () => import('./pages/changes/changes.module').then(m => m.ChangesModule) }
    ]
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardsRoutingModule { }
