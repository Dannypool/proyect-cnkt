import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUsers(page: number): Observable<any> {
    return this.http.get<any>('https://reqres.in/api/users?page=' + page);
  }

  getUserById(id: number): Observable<any> {
    return this.http.get<any>('https://reqres.in/api/users/' + id);
  }

  deleteUserById(id: number): Observable<any> {
    return this.http.delete<any>('https://reqres.in/api/users/' + id);
  }

  createUser(name: string, job: string): Observable<any> {
    return this.http.post<any>('https://reqres.in/api/users', {
      name: name,
      job: job
    });
  }

  updateUser(name: string, job: string, id: number): Observable<any> {
    return this.http.put<any>('https://reqres.in/api/users/' + id, {
      name: name,
      job: job
    });
  }

}
