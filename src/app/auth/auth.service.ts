import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable, of} from "rxjs";
import {User} from "./interfaces/user";
import {JwtResponse} from "./interfaces/jwt-response";
import {catchError, tap} from "rxjs/operators";
const apiUrl = 'http://localhost:8060/api/auth/';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = false;
  redirectUrl: string;


  constructor(private httpClient: HttpClient) {
  }

  //----------------

  //https://www.djamware.com/post/5d3332980707cc65eac46c7b/spring-boot-security-mongodb-angular-8-build-authentication#login-controller
  login(data: any): Observable<any> {
    console.log("authservice login function");
    return this.httpClient.post<any>(apiUrl + 'login', data)
      .pipe(
        tap(_ => this.isLoggedIn = true),
        catchError(this.handleError('login', []))
      );
  }

  logout(): Observable<any> {
    return this.httpClient.get<any>(apiUrl + 'signout')
      .pipe(
        tap(_ => this.isLoggedIn = false),
        catchError(this.handleError('logout', []))
      );
  }

  register(data: any): Observable<any> {
    return this.httpClient.post<any>(apiUrl + 'register', data)
      .pipe(
        tap(_ => this.log('login')),
        catchError(this.handleError('login', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    console.log('handleErrror authService class');

    return (error: any): Observable<T> => {

      console.log('handleErrror authService class => log error now');
      console.error(error); // log to console instead
      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

  private log(message: string) {
    console.log(message);
  }

}
