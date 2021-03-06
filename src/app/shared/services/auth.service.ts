import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>('https://reqres.in/api/login', {
      email: email,
      password: password
    });
  }

  singup(email: string, password: string): Observable<any> {
    return this.http.post<any>('https://reqres.in/api/register', {
      email: email,
      password: password
    });
  }

  logout(): Observable<any> {
    return this.http.get<any>('https://reqres.in/api/users?delay=3');
  }

}
