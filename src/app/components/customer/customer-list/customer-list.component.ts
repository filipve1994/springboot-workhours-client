import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Customer} from "../../../models/customer";
import {CustomerService} from "../../../services/customer.service";


@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  customersObservable: Observable<Customer[]>;
  customersObservable2: Observable<Customer[]>;

  constructor(private customerService: CustomerService) {
  }

  ngOnInit() {
    this.customersObservable = this.customerService.getAllCustomers();
    console.log(this.customersObservable);

    this.customersObservable2 = this.customerService.getCustomerById();
    console.log(this.customersObservable2);

  }

}
