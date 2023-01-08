import { FormBuilder } from '@angular/forms';
import { RegisterService } from './../../services/register.service';
import { Component } from '@angular/core';
import { LocalService } from 'src/app/shared/services/local.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css'],
})
export class RegisterPageComponent {
  errorMessage: string = '';
  error: boolean = false;

  registerForm;
  constructor(
    private localService: LocalService,
    private registerService: RegisterService,
    private formBuilder: FormBuilder
  ) {
    this.registerForm = this.formBuilder.group({
      username: [''],
      email: [''],
      password: [''],
      rePassword: [''],
    });
  }

  register() {
    console.log(this.registerForm.value);
    this.registerService.register({ ...this.registerForm.value }).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
    // this.authenticationService.register(this.username,this.email,this.password,this.rePassword).subscribe(res=>{
    //   // this.localService.saveData('token',res .jwt)
    //   console.log(this.localService.getData('token'))
    // },err=>{
    //   console.log(err)
    // })
  }
}
