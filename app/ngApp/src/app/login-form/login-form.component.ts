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
      login: ['', Validators.required,
        Validators.pattern(/[A-z]/)], // <--- the FormControl called "name"
      password: ['', Validators.compose([Validators.required,Validators.minLength(8)])] ,
    });
  }
  isControlInvalid(controlName: string): boolean {
    const control = this.log_in.controls[controlName];

    const result = control.invalid && control.touched;

    return result;
  }


  onSubmit() {
    const controls = this.log_in.controls;

    /** Проверяем форму на валидность */
    if (this.log_in.invalid) {
      /** Если форма не валидна, то помечаем все контролы как touched*/
      Object.keys(controls)
        .forEach(controlName => controls[controlName].markAsTouched());

      /** Прерываем выполнение метода*/
      return;
    }

    /** TODO: Обработка данных формы */
    console.log(this.log_in.value);
  }

}
