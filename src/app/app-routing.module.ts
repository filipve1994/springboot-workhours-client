import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AccountListComponent} from './components/account-list/account-list.component';
import {AccountCreateComponent} from './components/account-create/account-create.component';
import {ContactListComponent} from './components/contact-list/contact-list.component';
import {ContactCreateComponent} from './components/contact-create/contact-create.component';
import {ActivityListComponent} from './components/activity-list/activity-list.component';
import {ActivityCreateComponent} from './components/activity-create/activity-create.component';
import {CustomerListComponent} from './components/customer/customer-list/customer-list.component';
import {CustomerDetailsComponent} from './components/customer/customer-details/customer-details.component';
import {CustomerCreateComponent} from './components/customer/customer-create/customer-create.component';
import {CustomerUpdateComponent} from './components/customer/customer-update/customer-update.component';
import {CalculatorComponent} from "./components/calculator/calculator.component";
import {ContactformComponent} from "./components/contactform/contactform.component";
import {RegisterComponent} from "./auth/views/register/register.component";
import {LoginComponent} from "./auth/views/login/login.component";
import {Dashboard1Component} from "./dashboard/views/dashboard1/dashboard1.component";
import {FormlayoutComponent} from "./dashboard/views/forms/formlayout/formlayout.component";
import {ProductsComponent} from "./components/products/products.component";
import {AuthGuard} from "./auth/guards/auth.guard";
import {EditProductComponent} from "./components/products/edit-product/edit-product.component";
import {AddProductComponent} from "./components/products/add-product/add-product.component";


const routes: Routes = [

  {path: '', redirectTo: 'dashboard1', pathMatch: 'full'},
  {
    path: 'products',
    canActivate: [AuthGuard],
    component: ProductsComponent,
    data: {title: 'List of Products'}
  },
  {
    path: 'edit-product/:id',
    component: EditProductComponent,
    data: { title: 'Edit Article' }
  },
  {
    path: 'addproduct',
    canActivate: [AuthGuard],
    component: AddProductComponent,
    data: { title: 'Add Product' }
  },

  {
    path: 'login',
    component: LoginComponent,
    data: {title: 'Login'}
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {title: 'Register'}
  },
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
  {path: 'customerlist', component: CustomerListComponent},
  {path: 'customerdetails/:id', component: CustomerDetailsComponent},
  {path: 'customercreate', component: CustomerCreateComponent},
  {path: 'customersupdate', component: CustomerUpdateComponent},

  {path: 'calculator', component: CalculatorComponent},
  {path: 'contactform', component: ContactformComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'dashboard1', component: Dashboard1Component},
  {path: 'home', component: Dashboard1Component},
  {path: 'form-layout', component: FormlayoutComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
