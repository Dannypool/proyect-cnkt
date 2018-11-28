import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { ResourceModalComponent } from './resource-modal.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap'

import {HttpClient} from "@angular/common/http"
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing"
import {HttpLoaderFactory} from "../app.module"
import {TranslateLoader, TranslateModule, TranslateService} from "@ngx-translate/core"
describe('ResourceModalComponent', () => {
  let component: ResourceModalComponent
  let fixture: ComponentFixture<ResourceModalComponent>

  let translate: TranslateService
  let http: HttpTestingController

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[
        HttpClientTestingModule,
        FormsModule,
        ReactiveFormsModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
          }
        })
      ],
      declarations: [ 
        ResourceModalComponent,
        NgbActiveModal
      ],
      providers: [TranslateService]
    })
    .compileComponents()
    translate = TestBed.get(TranslateService)
    http = TestBed.get(HttpTestingController)
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourceModalComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  // it('should create', () => {
  //   expect(component).toBeTruthy()
  // })
})
