import { Component, OnInit } from '@angular/core';
import { SessionService } from '../services/session.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { SpinnerService } from '../services/spinner.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  navbarOpen = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
  constructor(
    private sessionService: SessionService,
    private router: Router,
    private authService: AuthService, 
    private spinnerService: SpinnerService
    ) { }

  ngOnInit() {
  }

  logout(){
    this.spinnerService.showSpinner()
    this.authService.logout(
    )
      .subscribe(
        r => {
          this.sessionService.logout()
          this.router.navigate(['login'])
        }, 
        r => {
          console.error("Ocurrio un error")
        }, 
        () => {
          this.spinnerService.hideSpinner()
        })


    
  }

}
