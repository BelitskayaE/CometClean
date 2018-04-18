import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css', '../app.component.css']
})
export class LoginFormComponent implements OnInit {
  log_in = new FormGroup ({
    login: new FormControl(),
    password: new FormControl()
  });

  ngOnInit() {

  }

  constructor(private fb: FormBuilder) { // <--- inject FormBuilder
    this.createForm();
  }
  createForm() {
    this.log_in = this.fb.group({
      login: [''], // <--- the FormControl called "name"
      password: ['']
    });
  }
  isControlInvalid(controlName: string): boolean {
    const control = this.log_in.controls[controlName];

    const result = control.invalid && control.touched;

    return result;
  }


  onSubmit() {

    let controls = this.log_in.controls;
    if (this.log_in.invalid) {
      Object.keys(controls)
        .forEach(controlName => controls[controlName].markAsTouched());

      return;
    }
    else{
      console.log(this.log_in.value);
      //

    }


  }

}
