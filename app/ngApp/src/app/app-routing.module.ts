import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { IndexComponent} from "./index/index.component";
import {SignUpFormComponent} from "./sign-up-form/sign-up-form.component";
import {LoginFormComponent} from "./login-form/login-form.component";
import {NewPasswordFormComponent} from "./new-password-form/new-password-form.component";
import {ErrorPageComponent} from "./error-page/error-page.component";
import {CodeChangeFormComponent} from "./code-change-form/code-change-form.component";
import {EmailForCodeFormComponent} from "./email-for-code-form/email-for-code-form.component";

let defaultRoot = 'app';

const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'registration', component: SignUpFormComponent},
  {path: 'login', component: LoginFormComponent},
  {path: 'new_password', component: NewPasswordFormComponent},
  {path: 'aliving_code', component: CodeChangeFormComponent},
  {path: 'aliving_email', component: EmailForCodeFormComponent},
  {path: 'error', component: ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
