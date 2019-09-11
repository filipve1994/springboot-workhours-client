import {Injectable} from '@angular/core';

import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Customer} from "../models/customer";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private  httpClient: HttpClient) {
  }

  public getAllCustomers(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>("http://localhost:3000/customers");
  }

  public getCustomerById(): Observable<Customer[]> {

    const params = new HttpParams().set('_page', "1").set('_limit', "1");

    return this.httpClient.get<Customer[]>("http://localhost:3000/customers", {params});
  }

}
