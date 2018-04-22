import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpService} from '../http.service';
import {CookieService} from 'ngx-cookie-service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css', '../login-form/login-form.component.css']
})
export class SignUpFormComponent implements OnInit {
  sign_up: FormGroup;

  constructor(private fb: FormBuilder,
              private cookieService: CookieService,
              private httpService: HttpService,
              private router: Router
  ) {
    this.createForm();
  }

  ngOnInit() {
    if (this.cookieService.get('login')){
      this.router.navigateByUrl('/app');
    }
  }

  createForm(){
    this.sign_up = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(6), Validators.pattern(/^[A-z0-9 ]*$/)]],
      login: ['', [Validators.required, Validators.minLength(6), Validators.pattern(/^[A-z0-9.]*$/)]], // <--- the FormControl called "login"
      email: ['',[Validators.required, Validators.minLength(12), Validators.pattern(/^[A-z0-9@.]*$/)]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.pattern(/^[A-z0-9*]*$/)]],
      repPassword: ['', [Validators.required, Validators.pattern(/^[A-z0-9*]*$/)]]
    });
  }
  isInputInvalid(controlName: string): boolean {
  const control = this.sign_up.controls[controlName];
  const result = control.invalid && control.touched;
  return result;
  }
  isRepPasswordInvalid(controlName1: string, controlName2: string): boolean{
    const control = this.sign_up.controls[controlName1];
    const control2 = this.sign_up.controls[controlName2];
    const result = !(this.sign_up.get(controlName1).value === this.sign_up.get(controlName2).value) && control.touched;
    return result;
  }
  isEmailInvalid(controlName: string){
    const control = this.sign_up.controls[controlName];
    const mail = this.sign_up.get('email').value;
    const result = (((mail.indexOf('@') === -1)?1:0) || (mail.substring(mail.indexOf('@')).indexOf('.')=== -1? 1:0) || ((mail.substring(mail.indexOf('@')).substring(mail.substring(mail.indexOf('@')).indexOf('.')).length - 1) === 0 ? 1: 0) || control.invalid) && control.touched;
    return result;
  }

  onSumbit(){


  }


}
