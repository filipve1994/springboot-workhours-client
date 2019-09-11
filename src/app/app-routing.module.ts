import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AccountListComponent} from './components/account-list/account-list.component';
import {AccountCreateComponent} from './components/account-create/account-create.component';
import {ContactListComponent} from './components/contact-list/contact-list.component';
import {ContactCreateComponent} from './components/contact-create/contact-create.component';
import {ActivityListComponent} from './components/activity-list/activity-list.component';
import {ActivityCreateComponent} from './components/activity-create/activity-create.component';
import { CustomerListComponent } from './components/customer/customer-list/customer-list.component';
import { CustomerDetailsComponent } from './components/customer/customer-details/customer-details.component';
import { CustomerCreateComponent } from './components/customer/customer-create/customer-create.component';
import { CustomerUpdateComponent } from './components/customer/customer-update/customer-update.component';
import {CalculatorComponent} from "./components/calculator/calculator.component";
import {ContactformComponent} from "./components/contactform/contactform.component";


const routes: Routes = [

  {path: '', redirectTo: 'contacts', pathMatch: 'full'},
  {
    path: 'accounts',
    component: AccountListComponent
  },
  {
    path: 'create-account',
    component: AccountCreateComponent
  },
  {
    path: 'contacts',
    component: ContactListComponent
  },
  {
    path: 'create-contact',
    component: ContactCreateComponent
  },
  {
    path: 'activities',
    component: ActivityListComponent
  },
  {
    path: 'create-activity',
    component: ActivityCreateComponent
  },
  { path: 'customerlist', component: CustomerListComponent},
  { path: 'customerdetails/:id', component: CustomerDetailsComponent},
  { path: 'customercreate', component: CustomerCreateComponent},
  { path: 'customersupdate', component: CustomerUpdateComponent},

  { path: 'calculator', component: CalculatorComponent},
  { path: 'contactform', component: ContactformComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
