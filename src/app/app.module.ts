import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorsComponent } from './errors/errors-component/errors.component';
import { ErrorsModule } from './errors';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { NeedAuthGuard } from './shared/guard/need-auth.guard';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NotificationService } from './shared/services/notification/notification.service';
import { ResourceModalComponent } from './resource-modal/resource-modal.component';
import { ResourcesComponent } from './resources/resources.component';
import { RouterModule, Routes } from '@angular/router';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { UserModalComponent } from './user-modal/user-modal.component';
import { UsersComponent } from './users/users.component';



const appRoutes: Routes = [
  {path: '', component: HomeComponent, canActivate: [NeedAuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent, canActivate: [NeedAuthGuard]},
  {path: 'users', component: UsersComponent, canActivate: [NeedAuthGuard]},
  {path: 'resources', component: ResourcesComponent, canActivate: [NeedAuthGuard]},
  { path: 'error', component: ErrorsComponent },
  { path: '**', component: ErrorsComponent, data: { error: 404 } },
];

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    UsersComponent,
    ResourcesComponent,
    MenuComponent,
    UserModalComponent,
    ResourceModalComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ErrorsModule,
    NgxSpinnerModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  })
  ],
  providers: [
    NotificationService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    UserModalComponent,
    ResourceModalComponent
  ]
})
export class AppModule { }
