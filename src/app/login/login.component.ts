import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { SessionService } from '../services/session.service';
import { SpinnerService } from '../services/spinner.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email: string = 'peter@klaven'
  public pass: string = 'cityslicka'

  operation: string = 'login'
  constructor(
    private authService: AuthService, 
    private router: Router, 
    private sessionService: SessionService,
    private spinnerService: SpinnerService) { }

  ngOnInit() {
  }

  tryLogin() {
    this.spinnerService.showSpinner()
    this.authService.login(
      this.email,
      this.pass
    )
      .subscribe(
        r => {
          if (r.token) {
            this.sessionService.setToken(r.token);
            this.router.navigateByUrl('/home');
          }
        },
        r => {
          alert(r.error.error);
        },
        () => {
          this.spinnerService.hideSpinner()
        });
  } 

}
