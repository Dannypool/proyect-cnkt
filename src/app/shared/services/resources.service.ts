import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResourcesService {

  public baseUrl = 'https://reqres.in/';

  constructor(private http: HttpClient) { }

  getResources(page: number): Observable<any> {
    return this.http.get<any>(this.baseUrl + 'api/unknown?page=' + page);
  }

  getResourceById(id: number): Observable<any> {
    return this.http.get<any>(this.baseUrl + 'api/unknown/' + id);
  }

  deleteResourceById(id: number): Observable<any> {
    return this.http.delete<any>(this.baseUrl + 'api/unknown/' + id);
  }

  createResource(name: string, color: string, year: number, pantone_value: string): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'api/unknown', {
      name: name,
      color: color,
      year: year,
      pantone_value: pantone_value
    });
  }

  updateResource(id: number, name: string, color: string, year: number, pantone_value: string): Observable<any> {
    return this.http.put<any>(this.baseUrl + 'api/unknown/' + id, {
      name: name,
      color: color,
      year: year,
      pantone_value: pantone_value
    });
  }

}
