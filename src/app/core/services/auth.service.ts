import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterUser } from '../models/register.user';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoginUser } from '../models/login.user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:3000'
  private _isLoggedIn = false


  constructor(private _http: HttpClient) {
    if (localStorage.getItem('token')) {
      this._isLoggedIn = true
    }
  }

  public get isLoggedIn() {
    return this._isLoggedIn
  }

  public set isLoggedIn(val) {
    this._isLoggedIn = val
  }

  RegisterUser(user: RegisterUser): Observable<RegisterUser> {
   return  this._http.post<RegisterUser>(`${this.baseUrl}/register`, user)
  }

  loginUser(user: LoginUser): Observable<LoginUser> {
    return this._http.post<LoginUser>(`${this.baseUrl}/login`, user)
  }

  logOutUser() {
    localStorage.clear()
    this.isLoggedIn = false
  }
}

