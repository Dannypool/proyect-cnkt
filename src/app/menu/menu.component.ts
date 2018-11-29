import { AuthService } from '../shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../shared/services/session.service';
import { SpinnerService } from '../shared/services/spinner.service';
import { Users } from '../shared/models/users';
import { UsersService } from '../shared/services/users.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  navbarOpen = false;
  isCollapsedMenu = false;
  isCollapsedUser = true;
  user: Users;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
  constructor(
    private sessionService: SessionService,
    private router: Router,
    private authService: AuthService,
    private spinnerService: SpinnerService,
    private usersService: UsersService
    ) { }

  ngOnInit() {
    this.user = {avatar: 'assets/img/generic_avatar.png' } as Users;
    this.spinnerService.showSpinner();
    this.usersService.getUserById(1)
    .subscribe(r => {
      this.user = r['data'];
    }).add(() => this.spinnerService.hideSpinner());
  }

  isLogin() {
    return this.sessionService.isLogged();
  }

  logout() {
    this.spinnerService.showSpinner();
    this.authService.logout(
    )
      .subscribe(
        r => {
          this.sessionService.logout();
          this.router.navigate(['login']);
        })
        .add(() => this.spinnerService.hideSpinner());



  }

}
