import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

// import ngx-translate and the http loader
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {AccountListComponent} from './components/account-list/account-list.component';
import {AccountCreateComponent} from './components/account-create/account-create.component';
import {ContactListComponent} from './components/contact-list/contact-list.component';
import {ContactCreateComponent} from './components/contact-create/contact-create.component';
import {ActivityListComponent} from './components/activity-list/activity-list.component';
import {ActivityCreateComponent} from './components/activity-create/activity-create.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule} from '@angular/material';
import {CustomerListComponent} from './components/customer/customer-list/customer-list.component';
import {CustomerDetailsComponent} from './components/customer/customer-details/customer-details.component';
import {CustomerCreateComponent} from './components/customer/customer-create/customer-create.component';
import {CustomerUpdateComponent} from './components/customer/customer-update/customer-update.component';
import {CalculatorComponent} from './components/calculator/calculator.component';
import {ContactformComponent} from './components/contactform/contactform.component';


@NgModule({
  declarations: [
    AppComponent,
    AccountListComponent,
    AccountCreateComponent,
    ContactListComponent,
    ContactCreateComponent,
    ActivityListComponent,
    ActivityCreateComponent,
    CustomerListComponent,
    CustomerDetailsComponent,
    CustomerCreateComponent,
    CustomerUpdateComponent,
    CalculatorComponent,
    ContactformComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    // ngx-translate and the loader module
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
