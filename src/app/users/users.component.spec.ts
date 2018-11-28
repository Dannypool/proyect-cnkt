import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { UsersComponent } from './users.component'

import {HttpClient} from "@angular/common/http"
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing"
import {HttpLoaderFactory} from "../app.module"
import {TranslateLoader, TranslateModule, TranslateService} from "@ngx-translate/core"
describe('UsersComponent', () => {
  let component: UsersComponent
  let fixture: ComponentFixture<UsersComponent>

  let translate: TranslateService
  let http: HttpTestingController

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[
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
      providers: [TranslateService]
    })
    .compileComponents()
    translate = TestBed.get(TranslateService)
    http = TestBed.get(HttpTestingController)
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
