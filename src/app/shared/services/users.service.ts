import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  public baseUrl = 'https://reqres.in/';

  constructor(private http: HttpClient) { }

  getUsers(page: number): Observable<any> {
    return this.http.get<any>(this.baseUrl + 'api/users?page=' + page);
  }

  getUserById(id: number): Observable<any> {
    return this.http.get<any>(this.baseUrl + 'api/users/' + id);
  }

  deleteUserById(id: number): Observable<any> {
    return this.http.delete<any>(this.baseUrl + 'api/users/' + id);
  }

  createUser(name: string, job: string): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'api/users', {
      name: name,
      job: job
    });
  }

  updateUser(name: string, job: string, id: number): Observable<any> {
    return this.http.put<any>(this.baseUrl + 'api/users/' + id, {
      name: name,
      job: job
    });
  }

}
