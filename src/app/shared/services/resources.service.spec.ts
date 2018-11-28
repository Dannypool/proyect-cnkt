import { getTestBed, inject, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Resources } from '../models/resource';
import { ResourcesService } from './resources.service';

describe('ResourcesService', () => {
  let injector: TestBed;
  let service: ResourcesService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        HttpClientTestingModule
      ],
      providers: [ResourcesService]
    });

    injector = getTestBed();
    service = injector.get(ResourcesService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', inject([ResourcesService], (service: ResourcesService) => {
    expect(service).toBeTruthy();
  }));

  it('getResourceById should return an Observable<Resources>', () => {
    const resourceData: Resources = {
      id: 2,
      name: 'fuchsia rose',
      year: 2001,
      color: '#C74375',
      pantone_value: '17-2031'
    };

    service.getResourceById(resourceData.id).subscribe(r => {
      expect(r.data).toEqual(resourceData);
    });

    const req = httpMock.expectOne(`https://reqres.in/api/unknown/` + resourceData.id);
    expect(req.request.method).toBe('GET');
    req.flush({ data: resourceData });
  });

  it('getResources should return an Observable<Resources[]>', () => {
    const resourcesData: Resources[] = [{
      id: 1,
      name: 'cerulean',
      year: 2000,
      color: '#98B2D1',
      pantone_value: '15-4020'
    },
    {
      id: 2,
      name: 'fuchsia rose',
      year: 2001,
      color: '#C74375',
      pantone_value: '17-2031'
    },
    {
      id: 3,
      name: 'true red',
      year: 2002,
      color: '#BF1932',
      pantone_value: '19-1664'
    }];
    const page = 1;

    service.getResources(page).subscribe(r => {
      expect(r.data.length).toBe(3);
      expect(r.data).toEqual(resourcesData);
    });

    const req = httpMock.expectOne(`https://reqres.in/api/unknown?page=` + page);
    expect(req.request.method).toBe('GET');
    req.flush({ data: resourcesData });
  });

  it('createResource should return an Observable<Resource>', () => {
    const resourceData = {
      name: 'cerulean',
      year: 2000,
      color: '#98B2D1',
      pantone_value: '15-4020'
    };
    service.createResource('cerulean', '#98B2D1', 2000, '15-4020').subscribe(r => {
      expect(r.data).toEqual(resourceData);
    });

    const req = httpMock.expectOne(`https://reqres.in/api/unknown`);
    expect(req.request.method).toBe('POST');
    req.flush({ data: resourceData });
  });

  it('updateResource should return an Observable<Resorce>', () => {
    const resourceData = {
      id: 2,
      name: 'cerulean',
      year: 2000,
      color: '#98B2D1',
      pantone_value: '15-4020'
    };
    service.updateResource(2, 'cerulean', '#98B2D1', 2000, '15-4020').subscribe(users => {
      expect(users.data).toEqual(resourceData);
    });

    const req = httpMock.expectOne(`https://reqres.in/api/unknown/` + resourceData.id);
    expect(req.request.method).toBe('PUT');
    req.flush({ data: resourceData });
  });

  it('deleteUserById should return an Observable<any>', () => {
    const id = 2;
    service.deleteResourceById(id).subscribe(r => {
      expect(id).toBe(id);
    });

    const req = httpMock.expectOne(`https://reqres.in/api/unknown/` + id);
    expect(req.request.method).toBe('DELETE');
    req.flush(id);
  });

});
