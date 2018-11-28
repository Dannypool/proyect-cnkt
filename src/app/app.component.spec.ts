import { TestBed, async } from '@angular/core/testing'
import { AppComponent } from './app.component'
import { NgxSpinnerModule } from 'ngx-spinner'
import { MenuComponent } from './menu/menu.component'
import {RouterTestingModule} from '@angular/router/testing'
import { NgbCollapse } from '@ng-bootstrap/ng-bootstrap'

import {HttpClient} from "@angular/common/http"
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing"
import {HttpLoaderFactory} from "./app.module"
import {TranslateLoader, TranslateModule, TranslateService} from "@ngx-translate/core"
describe('AppComponent', () => {
  let translate: TranslateService
  let http: HttpTestingController
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MenuComponent,
        NgbCollapse
      ],
      imports:[
        NgxSpinnerModule,
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
      providers: [TranslateService]
    }).compileComponents()
    translate = TestBed.get(TranslateService)
    http = TestBed.get(HttpTestingController)
  }))

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.debugElement.componentInstance
    expect(app).toBeTruthy()
  }))
  // it(`should have as title 'app'`, async(() => {
  //   const fixture = TestBed.createComponent(AppComponent)
  //   const app = fixture.debugElement.componentInstance
  //   expect(app.title).toEqual('app')
  // }))
  // it('should render title in a h1 tag', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent)
  //   fixture.detectChanges()
  //   const compiled = fixture.debugElement.nativeElement
  //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!')
  // }))
})
