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

  getResourceById(id: number): Observable<any>{
    return this.http.get<any>('https://reqres.in/api/unknown/' + id);
  }

  deleteResourceById(id: number): Observable<any>{
    return this.http.delete<any>('https://reqres.in/api/unknown/' + id);
  }

  createResource(name: string, color: string, year: number, pantone_value: string): Observable<any>{
    return this.http.post<any>('https://reqres.in/api/unknown', {
      name: name,
      color: color,
      year: year,
      pantone_value: pantone_value
    });
  }

  updateResource(id: number,name: string, color: string, year: number, pantone_value: string): Observable<any>{
    return this.http.put<any>('https://reqres.in/api/unknown/' + id, {
      name: name,
      color: color,
      year: year,
      pantone_value: pantone_value
    });
  }

}
