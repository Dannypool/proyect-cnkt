import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DATA_USERS_FAKE } from '../shared/models/fixtures/users.fake.spec';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpLoaderFactory } from '../app.module';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Observable } from 'rxjs';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { UsersComponent } from './users.component';
import { UsersProxyServiceFake } from '../shared/services/fixtures/users-proxy.service.fake.spec';
import { UsersService } from '../shared/services/users.service';

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;
  let userService: UsersService;

  let translate: TranslateService;
  let http: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
          }
        })
      ],
      declarations: [ UsersComponent ],
      providers: [
        TranslateService,
        {provide: UsersService, useClass: UsersProxyServiceFake}
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
    translate = TestBed.get(TranslateService);
    http = TestBed.get(HttpTestingController);
    userService = TestBed.get(UsersService);
    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should start in page 1', () => {
    component.ngOnInit();
    expect(component.page).toEqual(1);
  });

  it('should set users', () => {
    component.ngOnInit();
    expect(component.users[0].first_name).toEqual('Eve');
  });

  it('should create a new user', () => {
    fixture.detectChanges();
    const spy = spyOn(userService, 'createUser').and.returnValue(Observable.of(DATA_USERS_FAKE.user.data));
    component.createUser(DATA_USERS_FAKE.user.data);
    expect(component.createUser).toBeTruthy();
    expect(userService.createUser).toHaveBeenCalled();
  });

  it('should update a user', () => {
    fixture.detectChanges();
    const spy = spyOn(userService, 'updateUser').and.returnValue(Observable.of(DATA_USERS_FAKE.user.data));
    component.updateUser(DATA_USERS_FAKE.user.data);
    expect(component.updateUser).toBeTruthy();
    expect(userService.updateUser).toHaveBeenCalled();
  });

  it('should delete a user', () => {
    fixture.detectChanges();
    const spy = spyOn(userService, 'deleteUserById').and.returnValue(Observable.of(DATA_USERS_FAKE.user.data));
    component.deleteUser(DATA_USERS_FAKE.user.data.id);
    expect(component.deleteUser).toBeTruthy();
    expect(userService.deleteUserById).toHaveBeenCalled();
  });

});
