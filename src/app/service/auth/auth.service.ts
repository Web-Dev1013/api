import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  endpoint: string = 'http://localhost:4000/api';
  addApiPoint: string = "http://localhost:4000/addApi";
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  currentUser = "";

  constructor(
    private http: HttpClient,
    public router: Router
  ) {
  }

  // Sign-up
  signUp(user: User): Observable<any> {
    let api = `${this.endpoint}/register-user`;
    return this.http.post(api, user)
      .pipe(
        catchError(this.handleError)
      )
  }

  // Sign-in
  signIn(user: User) {
    return this.http.post<any>(`${this.endpoint}/signin`, user)
      .subscribe((res: any) => {
        localStorage.setItem('permission', res.msg.permission);
        localStorage.setItem('access_token', res.token);
        localStorage.setItem('username', res.msg.name);
        this.router.navigate(['/dashboard']);
      })
  }

  getToken() {
    return localStorage.getItem('access_token');
  }

  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return (authToken !== null) ? true : false;
  }

  doLogout() {
    let removeToken = localStorage.removeItem('access_token');
    localStorage.removeItem("permission");
    localStorage.removeItem("username");
    if (removeToken == null) {
      this.router.navigate(['login']);
    }
  }

  getUsers() {
    return this.http.get(`${this.endpoint}/getUsers`, { headers: this.headers });
  }

  getApis() {
    return this.http.get(`${this.addApiPoint}/getApis`, { headers: this.headers });
  }

  addNewApi(temp: string) {
    let formData = {
      apiName: temp
    }
    return this.http.post(`${this.addApiPoint}/addNewApi`, formData)
      .pipe(
        catchError(this.handleError)
      )
  }

  deleteUser(user: string) {
    let userID = ({
      id: user
    })
    console.log(userID)
    return this.http.post(`${this.endpoint}/deleteUser`, userID).subscribe((res:any) => {
      console.log(res);
    });
  }


  // Error 
  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }
}