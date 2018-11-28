import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import {TranslateLoader, TranslateModule, TranslateService} from "@ngx-translate/core"
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing"
import {HttpLoaderFactory} from "../app.module"
import {HttpClient} from "@angular/common/http"
import { LoginComponent } from './login.component'
import {RouterTestingModule} from '@angular/router/testing'

describe('LoginComponent', () => {
  let component: LoginComponent
  let fixture: ComponentFixture<LoginComponent>

  let translate: TranslateService
  let http: HttpTestingController

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[
        HttpClientTestingModule,
        RouterTestingModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
          }
        })
      ],
      declarations: [ LoginComponent ],
      providers: [TranslateService]
    })
    .compileComponents()
    translate = TestBed.get(TranslateService)
    http = TestBed.get(HttpTestingController)
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
