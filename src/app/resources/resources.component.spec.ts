import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DATA_RESOURCES_FAKE } from './../shared/models/fixtures/resource.fake.spec';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpLoaderFactory } from '../app.module';
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { ResourcesComponent } from './resources.component';
import { ResourcesProxyServiceFake } from '../shared/services/fixtures/resources-proxy.service.fake.spec';
import { ResourcesService } from '../shared/services/resources.service';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';

describe('ResourcesComponent', () => {
  let component: ResourcesComponent;
  let fixture: ComponentFixture<ResourcesComponent>;
  let resourceServices: ResourcesService;

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
      declarations: [
        ResourcesComponent,
        NgbAlert
      ],
      providers: [
        TranslateService,
        {provide: ResourcesService, useClass: ResourcesProxyServiceFake}
      ]
    })
    .compileComponents();
    translate = TestBed.get(TranslateService);
    http = TestBed.get(HttpTestingController);
    resourceServices = TestBed.get(ResourcesService);
    fixture = TestBed.createComponent(ResourcesComponent);
    component = fixture.componentInstance;
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set resources', () => {
    component.ngOnInit();
    console.log(component.resources[0]);
    console.log(component);
    expect(component.resources[0].name).toEqual('cerulean');
  });

  it('should start in page 1', () => {
    component.ngOnInit();
    expect(component.page).toEqual(1);
  });

  it('should create a new resource', () => {
    fixture.detectChanges();
    const spy = spyOn(resourceServices, 'createResource').and.returnValue(Observable.of(DATA_RESOURCES_FAKE.resource.data));
    component.createResource(DATA_RESOURCES_FAKE.resource.data);
    expect(component.createResource).toBeTruthy();
    expect(resourceServices.createResource).toHaveBeenCalled();
  });

  it('should update a resource', () => {
    fixture.detectChanges();
    const spy = spyOn(resourceServices, 'updateResource').and.returnValue(Observable.of(DATA_RESOURCES_FAKE.resource.data));
    component.updateResource(DATA_RESOURCES_FAKE.resource.data);
    expect(component.updateResource).toBeTruthy();
    expect(resourceServices.updateResource).toHaveBeenCalled();
  });

  it('should delete a resource', () => {
    fixture.detectChanges();
    const spy = spyOn(resourceServices, 'deleteResourceById').and.returnValue(Observable.of(DATA_RESOURCES_FAKE.resource.data));
    component.deleteResource(DATA_RESOURCES_FAKE.resource.data.id);
    expect(component.deleteResource).toBeTruthy();
    expect(resourceServices.deleteResourceById).toHaveBeenCalled();
  });
});
