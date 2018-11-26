import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ResourcesComponent } from './resources/resources.component';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { NgxSpinnerModule } from 'ngx-spinner';

import { FormsModule } from '@angular/forms';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { NeedAuthGuard } from './guard/need-auth.guard';
import { ErrorsComponent } from './errors/errors-component/errors.component';
import { ErrorsModule } from './errors';
import { NotificationService } from './services/notification/notification.service';

const appRoutes: Routes = [
  {path: '', component: HomeComponent, canActivate: [NeedAuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent, canActivate: [NeedAuthGuard]},
  {path: 'users', component: UsersComponent, canActivate: [NeedAuthGuard]},
  {path: 'resources', component: ResourcesComponent, canActivate: [NeedAuthGuard]},
  { path: 'error', component: ErrorsComponent },
  { path: '**', component: ErrorsComponent, data: { error: 404 } },
]

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
    MenuComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
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
  bootstrap: [AppComponent]
})
export class AppModule { }
