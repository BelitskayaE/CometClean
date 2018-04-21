import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpService} from '../http.service';
import {CookieService} from 'ngx-cookie-service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css', '../app.component.css']
})
export class LoginFormComponent implements OnInit {
  cookieValue: string;
  log_in: FormGroup;
  checkerData: Boolean = false;
  checkerAuth: Boolean = true;

  ngOnInit() {
    if (this.cookieService.get('login')){
      this.router.navigateByUrl('/app');
    }
  }

  constructor(
    private fb: FormBuilder,
    private cookieService: CookieService,
    private httpService: HttpService,
    private router: Router
  ) { // <--- inject FormBuilder
    this.createForm();
  }

  createForm() {
    this.log_in = this.fb.group({
      login: ['', [Validators.required, Validators.minLength(6), Validators.pattern(/^[A-z0-9@.]*$/)]], // <--- the FormControl called "login"
      password: ['', [Validators.required, Validators.minLength(8), Validators.pattern(/^[A-z0-9*]*$/)]]
    });
  }


  isControlInvalid(controlName: string): boolean {
    const control = this.log_in.controls[controlName];
    const result = control.invalid && control.touched;
    return result;
  }

  isAuthInvalid(): boolean {
    if (this.checkerAuth) return false;
    else return true;
  }

//почему после первого нажатия на submit алгоритм заходит в последний else???
  onSubmit() {
    const controls = this.log_in.controls;//object
    if (this.log_in.invalid) {/*if wrong symbols*/
      Object.keys(controls)
        .forEach(controlName => controls[controlName].markAsTouched());
      //return;
    } else {
      console.log(this.log_in.value);
      console.log(this.log_in.status);
      /*function checker existency of user and true password*/
      //console.log('controls:'+ controls);

      this.httpService.checkUser(this.log_in.value)
        .subscribe((checkerData: Boolean) => {
            this.checkerData = checkerData;
          }
        );
      if (this.checkerData) {//true login and password
        console.log('if');

        this.cookieService.set('login', this.log_in.get('login').value);
        this.cookieValue = this.cookieService.get('login');
        //redirectTo - HOW CAN I DO REDIRECT???
        this.httpService.authUser(this.log_in.get('login').value)
          .subscribe();
        this.router.navigateByUrl('/app');
      } else {
        console.log('else');
        this.checkerAuth = false;
        return;
      }
    }
    //console.log(this.checkerData);


  }

}
