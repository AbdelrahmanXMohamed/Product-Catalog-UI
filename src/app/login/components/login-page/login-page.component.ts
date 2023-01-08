import { LoginService } from './../../services/login.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalService } from 'src/app/shared/services/local.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent {
  username: string = '';
  password: string = '';

  constructor(
    private router: Router,
    private localService: LocalService,
    private loginService: LoginService
  ) {
    if (localService.getData('token')) {
      // this.router.navigate(['/'])
    }
  }

  login() {
    this.loginService.signIn(this.username, this.password).subscribe(
      (res) => {
        this.localService.saveData('token', res.jwt);
        console.log(this.localService.getData('token'));
        this.router.navigate(['/']);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
