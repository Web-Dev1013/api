import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridModule} from 'ag-grid-angular';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SerpApiComponent } from './serp-api/serp-api.component';
import { KeywordApiComponent } from './keyword-api/keyword-api.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [SerpApiComponent, KeywordApiComponent, AdminComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    AgGridModule.withComponents([])
  ]
})
export class DashboardModule { }
