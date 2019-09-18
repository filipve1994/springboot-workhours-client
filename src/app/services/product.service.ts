import {Injectable} from '@angular/core';
import {Product} from '../models/product';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {environment} from '../../environments/environment';
import {httpOptionsJson} from "../constants/constants";

//const apiUrl = 'http://localhost:8060/api/products';
const apiSuffix = 'products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.apiUrl}/${apiSuffix}`)
      .pipe(
        tap(_ => this.log('fetched Products')),
        catchError(this.handleError('getProducts', []))
      );
  }

  getProduct(id: number): Observable<Product> {
    const url = `${environment.apiUrl}/${id}`;
    return this.http.get<Product>(url).pipe(
      tap(_ => console.log(`fetched Product id=${id}`)),
      catchError(this.handleError<Product>(`getProduct id=${id}`))
    );
  }

  addProducts(data: Product): Observable<Product> {
    return this.http.post<Product>(environment.apiUrl, data, httpOptionsJson)
      .pipe(
        tap((pr: Product) => console.log(`add Products w/ id=${pr.id}`)),
        catchError(this.handleError<any>('addProduct'))
      );
  }

  updateProduct(id: any, product: Product): Observable<any> {
    const url = `${environment.apiUrl}/${id}`;
    return this.http.put(url, product, httpOptionsJson).pipe(
      tap(_ => console.log(`updated Product id=${id}`)),
      catchError(this.handleError<any>('updateProduct'))
    );
  }

  deleteProduct(id: any): Observable<Product> {
    const url = `${environment.apiUrl}/${id}`;
    return this.http.delete<Product>(url, httpOptionsJson)
      .pipe(
        tap(_ => console.log(`deleted Product id=${id}`)),
        catchError(this.handleError<Product>('deleteProduct'))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead
      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

  private log(message: string) {
    console.log(message);
  }

}
