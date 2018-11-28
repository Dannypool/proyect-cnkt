import { Component, OnInit } from '@angular/core';
import { SessionService } from '../services/session.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { SpinnerService } from '../services/spinner.service';
import { UsersService } from '../services/users.service';
import { Users } from '../models/users';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  
  navbarOpen = false
  isCollapsedMenu = false
  isCollapsedUser = true
  user: Users

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
    this.user = {avatar:"assets/img/generic_avatar.png" } as Users
    this.spinnerService.showSpinner()
    this.usersService.getUserById(1)
    .subscribe(r => {
      this.user = r['data']
    }).add(() => this.spinnerService.hideSpinner())
  }

  logout(){
    this.spinnerService.showSpinner()
    this.authService.logout(
    )
      .subscribe(
        r => {
          this.sessionService.logout()
          this.router.navigate(['login'])
        })
        .add(() => this.spinnerService.hideSpinner())


    
  }

}
