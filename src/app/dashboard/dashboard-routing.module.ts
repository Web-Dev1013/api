import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard.component';
import { KeywordApiComponent } from './keyword-api/keyword-api.component';
import { SerpApiComponent } from './serp-api/serp-api.component';

const routes: Routes = [
  {
    path: "", component: DashboardComponent, children: [
      { path: "", redirectTo: "SERP", pathMatch: "full" },
      { path: "SERP", component: SerpApiComponent },
      { path: "Keyword", component: KeywordApiComponent },
      { path: "admin", component: AdminComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
