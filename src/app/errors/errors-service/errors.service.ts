import * as StackTraceParser from 'error-stack-parser';
import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { Event, NavigationError, Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';



@Injectable()
export class ErrorsService {

  constructor(
    private injector: Injector,
    private router: Router,
  ) {
    // Subscribe to the NavigationError
    this.router
          .events
          .subscribe((event: Event) => {
            if (event instanceof NavigationError) {
                // Redirect to the ErrorComponent
                this.log(event.error)
                        .subscribe((errorWithContext) => {
                          this.router.navigate(['/error'], { queryParams: errorWithContext });
                        });
            }
          });
  }

  log(error) {
    // Log the error to the console
    console.error(error);
    // Send error to server
    const errorToSend = this.addContextInfo(error);
    return FakeHttpService.post(errorToSend);
  }

  addContextInfo(error) {
    // You can include context details here (usually coming from other services: UserService...)
    const name = error.name || null;
    const appId = 'shthppnsApp';
    const user = 'ShthppnsUser';
    const time = new Date().getTime();
    const id = `${appId}-${user}-${time}`;
    const location = this.injector.get(LocationStrategy);
    const url = location instanceof PathLocationStrategy ? location.path() : '';
    const status = error.status || null;
    const message = error.message || error.toString();
    const stack = error instanceof HttpErrorResponse ? null : StackTraceParser.parse(error);

    const errorWithContext = {name, appId, user, time, id, url, status, message, stack};
    return errorWithContext;
  }

}

class FakeHttpService {
  static post(error): Observable<any> {
    console.log('Error sent to the server: ', error);
    return Observable.of(error);
  }
}
