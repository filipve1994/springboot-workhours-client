import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable, of} from "rxjs";
import {User} from "./interfaces/user";
import {JwtResponse} from "./interfaces/jwt-response";
import {catchError, tap} from "rxjs/operators";
import { JwtHelperService } from '@auth0/angular-jwt';
import {environment} from "../../environments/environment";

// const apiUrl = 'http://localhost:8060/api/auth/';
const apiUrl = environment.apiUrl + '/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = false;
  redirectUrl: string;
  jwt: string;

  constructor(private httpClient: HttpClient) {
  }

  islogin(){
    if (localStorage.getItem('token')){
      return this.isLoggedIn = true;
    }else {
      return this.isLoggedIn = false;
    }
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

  parseJwt() {
    let jwtHelper = new JwtHelperService();
    let objJwt = jwtHelper.decodeToken(this.jwt);

  }

  loadToken() {
    this.jwt= localStorage.getItem('token');
    this.parseJwt();
  }

  private log(message: string) {
    console.log(message);
  }

}
