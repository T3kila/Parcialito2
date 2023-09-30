import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { CommonModule } from '@angular/common';
import { NotificationComponent } from './notification/notification.component';
import { LayoutComponent } from './layout/layout.component';
import { PageRoutingModule } from './page-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ItemComponent } from './item/item.component';
import { CustomerComponent } from './customer/customer.component';

@NgModule({
  imports: [
    MaterialModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    PageRoutingModule

  ],
  exports: [],
  declarations: [
    NotificationComponent,
    LayoutComponent,
    DashboardComponent,
    ItemComponent,
    CustomerComponent
  ],
  providers: [],
})
export class PagesModule { }
