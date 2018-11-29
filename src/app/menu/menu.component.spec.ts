import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DATA_USERS_FAKE } from '../shared/models/fixtures/users.fake.spec';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpLoaderFactory } from '../app.module';
import { MenuComponent } from './menu.component';
import { NgbCollapse } from '@ng-bootstrap/ng-bootstrap';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Observable } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { UsersProxyServiceFake } from '../shared/services/fixtures/users-proxy.service.fake.spec';
import { UsersService } from '../shared/services/users.service';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;
  let userService: UsersService;

  let translate: TranslateService;
  let http: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
          }
        })
      ],
      declarations: [
        MenuComponent,
        NgbCollapse
      ],
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
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get user in login', () => {
    fixture.detectChanges();
    const spy = spyOn(userService, 'getUserById').and.returnValue(Observable.of(DATA_USERS_FAKE.user));
    // expect(component.ngOnInit).toBeTruthy();
    component.ngOnInit();
    expect(userService.getUserById).toHaveBeenCalled();
    expect(component.user.first_name).toEqual('Janet');
  });
});
