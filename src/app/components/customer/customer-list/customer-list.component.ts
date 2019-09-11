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
  customersObservable2: Observable<Customer>;

  constructor(private customerService: CustomerService) {
  }

  ngOnInit() {

    this.customerService.getContacts().subscribe((res) => {
      this.customerService.getContacts(this.customerService.nextPage).subscribe((res) => {
        console.log(res.body);
      })
    });

    const customer = {
      "id": 305,
      "name": "First name",
      "email": "name@email.com",
      "phone": "(387) 592-6773",
      "city": "City",
      "country": "Country",
      "title": "Title"
    };

    this.customerService.createCustomer(customer).subscribe((res) => {
      console.log("created a customer");
    });

    this.customerService.deleteCustomer(305).subscribe((res)=>{
      console.log("Deleted a customer");
    });


    this.customersObservable = this.customerService.getAllCustomers();
    console.log(this.customersObservable);

    this.customersObservable2 = this.customerService.getCustomerById(1);
    console.log(this.customersObservable2);

  }

}
