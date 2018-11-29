import { AuthService } from '../shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SessionService } from '../shared/services/session.service';
import { SpinnerService } from '../shared/services/spinner.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email = 'peter@klaven';
  public pass = 'cityslicka';
  loginForm: FormGroup;
  operation = 'login';
  constructor(
    private authService: AuthService,
    private router: Router,
    private sessionService: SessionService,
    private spinnerService: SpinnerService,
    private formBuilder: FormBuilder
    ) {
      this.loginForm = this.formBuilder.group({
        email: ['', [ Validators.required, Validators.email]],
        pass: ['', [ Validators.required, Validators.minLength(6)]]
      });
    }

  ngOnInit() {
  }

  submitForm() {
    if (this.operation === 'login') {
      this.trySingup();
    } else {
      this.trySingup();
    }
  }

  trySingup() {
    this.spinnerService.showSpinner();
    this.authService.singup(
      this.email,
      this.pass
    )
      .subscribe(
        r => {
          if (r.token) {
            this.sessionService.setToken(r.token);
            this.router.navigateByUrl('/home');
          }
        }

      ).add(() => {
        this.spinnerService.hideSpinner();
      });
  }
  tryLogin() {
    this.spinnerService.showSpinner();
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
        }

      ).add(() => {
        this.spinnerService.hideSpinner();
      });
  }

}
