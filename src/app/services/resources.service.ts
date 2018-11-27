import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResourcesService {

  constructor(private http: HttpClient) { }

  getResources(page: number): Observable<any>{
    return this.http.get<any>('https://reqres.in/api/unknown?page=' + page);
  }

  deleteResourceById(id: number): Observable<any>{
    return this.http.delete<any>('https://reqres.in/api/unknown/' + id);
  }
}
