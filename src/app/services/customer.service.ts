import {Injectable} from '@angular/core';

import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Customer} from "../models/customer";
import {tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  public firstPage: string = "";
  public prevPage: string = "";
  public nextPage: string = "";
  public lastPage: string = "";

  apiURL: string = 'http://localhost:3000';


  constructor(private  httpClient: HttpClient) {
  }

  public getAllCustomers(url?: string): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(`${this.apiURL}/customers`);
  }

  public getCustomers(url?: string) {
    return this.httpClient.get<Customer[]>(`${this.apiURL}/customers`);
  }

  public getCustomerById(id: number): Observable<Customer> {

    return this.httpClient.get<Customer>(`${this.apiURL}/customers/${id}`);
  }

  public createCustomer(customer: Customer) {
    return this.httpClient.post(`${this.apiURL}/customers/`, customer);
  }

  public updateCustomer(customer: Customer) {
    return this.httpClient.put(`${this.apiURL}/customers/${customer.id}`,customer);
  }

  public deleteCustomer(id: number) {
    return this.httpClient.delete(`${this.apiURL}/customers/${id}`);
  }

  public getContacts(url?: string) {

    if (url) {
      return this.httpClient.get<Customer[]>(url, {observe: 'response'}).pipe(tap(res => {
        this.retrieve_pagination_links(res);
      }));
    }

    return this.httpClient.get<Customer[]>(`${this.apiURL}/customers?page=1`,
      {observe: 'response'}).pipe(tap(res => {
      this.retrieve_pagination_links(res);
    }));
  }

  public retrieve_pagination_links(response) {
    const linkHeader = this.parse_link_header(response.headers.get('Link'));
    this.firstPage = linkHeader["first"];
    this.lastPage = linkHeader["last"];
    this.prevPage = linkHeader["prev"];
    this.nextPage = linkHeader["next"];
  }

  parse_link_header(header) {
    if (header.length == 0) {
      return;
    }

    let parts = header.split(',');
    var links = {};
    parts.forEach(p => {
      let section = p.split(';');
      var url = section[0].replace(/<(.*)>/, '$1').trim();
      var name = section[1].replace(/rel="(.*)"/, '$1').trim();
      links[name] = url;

    });
    return links;
  }


}
