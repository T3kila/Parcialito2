
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotificationComponent } from './notification/notification.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ItemComponent } from './item/item.component';
import { CustomerComponent } from './customer/customer.component';

export const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'notification', component: NotificationComponent },  //QUITAMOS EL PAGES para no repetirlo
  { path: 'item', component: ItemComponent },
  { path: 'customer', component: CustomerComponent },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PageRoutingModule{}
