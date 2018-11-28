import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot
  } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SessionService } from '../services/session.service';

@Injectable({
  providedIn: 'root'
})
export class NeedAuthGuard implements CanActivate {

  constructor(private sessionService: SessionService, private router: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      const redirectUrl = next['_routerState']['url'];

      if (this.sessionService.isLogged()) {
        return true;
      }
      this.router.navigate(['login']);
    return false;
  }
}
