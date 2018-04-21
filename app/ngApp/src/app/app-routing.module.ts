import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { IndexComponent} from './index/index.component';
import {SignUpFormComponent} from './sign-up-form/sign-up-form.component';
import {LoginFormComponent} from './login-form/login-form.component';
import {NewPasswordFormComponent} from './new-password-form/new-password-form.component';
import {ErrorPageComponent} from './error-page/error-page.component';
import {CodeChangeFormComponent} from './code-change-form/code-change-form.component';
import {EmailForCodeFormComponent} from './email-for-code-form/email-for-code-form.component';
import {FriendInfoComponent} from './friend-info/friend-info.component';

const defaultRoot = 'app';

const routes: Routes = [
  {path: defaultRoot + '', component: IndexComponent},
  {path: defaultRoot + '/registration', component: SignUpFormComponent},
  {path: defaultRoot + '/login', component: LoginFormComponent},
  {path: defaultRoot + '/new_password', component: NewPasswordFormComponent},
  {path: defaultRoot + '/aliving_code', component: CodeChangeFormComponent},
  {path: defaultRoot + '/aliving_email', component: EmailForCodeFormComponent},
  {path: defaultRoot + '**', component: ErrorPageComponent},
  {path: defaultRoot + '/friend_info', component: FriendInfoComponent},
  //{path: defaultRoot + '/login', redirectTo: 'defaultRoot'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
