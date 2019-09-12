import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ChartistModule } from 'ng-chartist';
import { ChartsModule } from 'ng2-charts';

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
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { HomeComponent } from './views/home/home.component';
import { AboutComponent } from './views/about/about.component';
import { ContactComponent } from './views/contact/contact.component';
import { RegisterComponent } from './auth/views/register/register.component';
import { LoginComponent } from './auth/views/login/login.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatMenuModule} from "@angular/material/menu";
import { Dashboard1Component } from './dashboard/views/dashboard1/dashboard1.component';
import { BarchartComponent } from './dashboard/components/barchart/barchart.component';
import { PiechartComponent } from './dashboard/components/piechart/piechart.component';
import { Barchart2Component } from './dashboard/components/ng2/barchart2/barchart2.component';


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
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    RegisterComponent,
    LoginComponent,
    Dashboard1Component,
    BarchartComponent,
    PiechartComponent,
    Barchart2Component,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,

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
    MatIconModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    ChartistModule, // add ChartistModule to your imports
    ChartsModule
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
