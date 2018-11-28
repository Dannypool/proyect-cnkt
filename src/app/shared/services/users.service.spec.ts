import {
  async,
  getTestBed,
  inject,
  TestBed
  } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UsersService } from './users.service';


describe('UsersService', () => {

  // let injector: TestBed;
  // let service: UsersService;
  // let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        HttpClientTestingModule
      ],
      providers: [UsersService]
    });

    // injector = getTestBed();
    // service = injector.get(UsersService);
    // httpMock = injector.get(HttpTestingController);

  });

  afterEach(() => {
    // httpMock.verify();
  });

  it('should be created', inject([UsersService], (service: UsersService) => {
    expect(service).toBeTruthy();
  }));

  it ('should get users', async(() => {
    console.log('test');
    const service: UsersService = TestBed.get(UsersService);
    service.getUsers(1)
    .subscribe(
      (response) => expect(response.json()).not.toBeNull(),
      (error) => fail(error)
    );
  }));

  // it('getUserById should return an Observable<User>', () => {
  //   const usersData: Users = {
  //     id: 2,
  //     first_name: 'Janet',
  //     last_name: 'Weaver',
  //     avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg'
  //   };

  //   service.getUserById(usersData.id).subscribe(users => {
  //     // expect(users.length).toBe(2)
  //     expect(users.data).toEqual(usersData);
  //   });

  //   const req = httpMock.expectOne(`https://reqres.in/api/users/` + usersData.id);
  //   expect(req.request.method).toBe('GET');
  //   req.flush({ data: usersData });
  // });

  // it('getUsers should return an Observable<User[]>', () => {
  //   const usersData: Users[] = [{
  //     id: 4,
  //     first_name: 'Eve',
  //     last_name: 'Holt',
  //     avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg'
  //   },
  //   {
  //     id: 5,
  //     first_name: 'Charles',
  //     last_name: 'Morris',
  //     avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg'
  //   },
  //   {
  //     id: 6,
  //     first_name: 'Tracey',
  //     last_name: 'Ramos',
  //     avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg'
  //   }];
  //   const page = 2;
  //   service.getUsers(page).subscribe(users => {
  //     expect(users.data.length).toBe(3);
  //     expect(users.data).toEqual(usersData);
  //   });

  //   const req = httpMock.expectOne(`https://reqres.in/api/users?page=2`);
  //   expect(req.request.method).toBe('GET');
  //   req.flush({ data: usersData });
  // });

  // it('createUser should return an Observable<User>', () => {
  //   const usarData = {
  //     id: 107,
  //     name: 'morpheus',
  //     job: 'leader',
  //     createdAt: '2018-11-28T09:25:48.516Z'
  //   };

  //   service.createUser('morpheus', 'leader').subscribe(users => {
  //     // expect(users.length).toBe(2)
  //     expect(users.data).toEqual(usarData);
  //   });

  //   const req = httpMock.expectOne(`https://reqres.in/api/users`);
  //   expect(req.request.method).toBe('POST');
  //   req.flush({ data: usarData });
  // });

  // it('updateUser should return an Observable<User>', () => {
  //   const usersData = {
  //     name: 'morpheus',
  //     job: 'leader',
  //     createdAt: '2018-11-28T09:25:48.516Z'
  //   };

  //   const id = 2;

  //   service.updateUser('morpheus', 'leader', id).subscribe(users => {
  //     // expect(users.length).toBe(2)
  //     expect(users.data).toEqual(usersData);
  //   });

  //   const req = httpMock.expectOne(`https://reqres.in/api/users/` + id);
  //   expect(req.request.method).toBe('PUT');
  //   req.flush({ data: usersData });
  // });

  // it('deleteUserById should return an Observable<any>', () => {
  //   const id = 2;

  //   service.deleteUserById(id).subscribe(users => {
  //     expect(id).toBe(id);
  //   });

  //   const req = httpMock.expectOne(`https://reqres.in/api/users/` + id);
  //   expect(req.request.method).toBe('DELETE');
  //   req.flush(id);
  // });

});
