import { DATA_USERS_FAKE } from '../../models/fixtures/users.fake.spec';
import { Observable } from 'rxjs/Observable';
import { Response, ResponseOptions } from '@angular/http';
import { Users } from '../../models/users';
import 'rxjs/add/observable/of';

export class UsersProxyServiceFake {
  getUsers(page: number): Observable<any> {
    const responseOptions: ResponseOptions = new ResponseOptions({
      body: DATA_USERS_FAKE.users
    });
    const response: Response = new Response(responseOptions);
    return Observable.of(response.json());
  }

  createUser(user: Users): Observable<any> {
    const responseOptions: ResponseOptions = new ResponseOptions({
      body: DATA_USERS_FAKE.user
    });
    const response: Response = new Response(responseOptions);
    return Observable.of(response.json());
  }

  getUserById(id: number): Observable<any> {
    const responseOptions: ResponseOptions = new ResponseOptions({
      body: DATA_USERS_FAKE.user
    });
    const response: Response = new Response(responseOptions);
    return Observable.of(response.json());
  }

  updateUser(name: string, job: string, id: number): Observable<any> {
    const responseOptions: ResponseOptions = new ResponseOptions({
      body: DATA_USERS_FAKE.user
    });
    const response: Response = new Response(responseOptions);
    return Observable.of(response.json());
  }

  deleteUserById(id: number): Observable<any> {
    const responseOptions: ResponseOptions = new ResponseOptions({
      body: DATA_USERS_FAKE.user
    });
    const response: Response = new Response(responseOptions);
    return Observable.of(response.json());
  }

}
