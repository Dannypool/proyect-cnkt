import {
  async,
  getTestBed,
  inject,
  TestBed
  } from '@angular/core/testing';
import { DATA_USERS_FAKE } from '../models/fixtures/users.fake.spec';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UsersService } from './users.service';

describe('UsersService', () => {

  let injector: TestBed;
  let service: UsersService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        HttpClientTestingModule
      ],
      providers: [UsersService]
    });

    injector = getTestBed();
    service = injector.get(UsersService);
    httpMock = injector.get(HttpTestingController);

  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', inject([UsersService], () => {
    expect(service).toBeTruthy();
  }));

  // it ('should get users', async(() => {
  //   console.log('test');
  //   const serviceTest: UsersService = TestBed.get(UsersService);
  //   serviceTest.getUsers(1)
  //   .subscribe(
  //     (response) => expect(response.json()).not.toBeNull(),
  //     (error) => fail(error)
  //   );
  // }));

  it('getUserById should return an Observable<any>', () => {
    const usersData = DATA_USERS_FAKE.user;
    const id = DATA_USERS_FAKE.user.data.id;
    service.getUserById(id).subscribe(users => {
      // expect(users.length).toBe(2)
      expect(users.data).toEqual(usersData);
    });

    const req = httpMock.expectOne(`https://reqres.in/api/users/` + id);
    expect(req.request.method).toBe('GET');
    req.flush({ data: usersData });
  });

  it('getUsers should return an Observable<User[]>', () => {
    const usersData = DATA_USERS_FAKE.users;
    const page = 2;
    service.getUsers(page).subscribe(users => {
      expect(users.data.data.length).toBe(3);
      expect(users.data).toEqual(usersData);
    });

    const req = httpMock.expectOne(`https://reqres.in/api/users?page=2`);
    expect(req.request.method).toBe('GET');
    req.flush({ data: usersData });
  });

  it('createUser should return an Observable<any>', () => {
    const usarData = DATA_USERS_FAKE.new_user;

    service.createUser(usarData.name, usarData.job).subscribe(users => {
      // expect(users.length).toBe(2)
      expect(users.data).toEqual(usarData);
    });

    const req = httpMock.expectOne(`https://reqres.in/api/users`);
    expect(req.request.method).toBe('POST');
    req.flush({ data: usarData });
  });

  it('updateUser should return an Observable<any>', () => {
    const usersData = DATA_USERS_FAKE.update_user;

    const id = 2;

    service.updateUser(usersData.name, usersData.job, id).subscribe(users => {
      // expect(users.length).toBe(2)
      expect(users.data).toEqual(usersData);
    });

    const req = httpMock.expectOne(`https://reqres.in/api/users/` + id);
    expect(req.request.method).toBe('PUT');
    req.flush({ data: usersData });
  });

  it('deleteUserById should return an Observable<any>', () => {
    const id = 2;

    service.deleteUserById(id).subscribe(users => {
      expect(id).toBe(id);
    });

    const req = httpMock.expectOne(`https://reqres.in/api/users/` + id);
    expect(req.request.method).toBe('DELETE');
    req.flush(id);
  });

});
