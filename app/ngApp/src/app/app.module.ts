import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IndexComponent } from './index/index.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ChatsComponent } from './chats/chats.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { BackgroundsComponent } from './backgrounds/backgrounds.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { CodeChangeFormComponent } from './code-change-form/code-change-form.component';
import { EmailForCodeFormComponent } from './email-for-code-form/email-for-code-form.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { NewPasswordFormComponent } from './new-password-form/new-password-form.component';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';
import { FriendInfoComponent } from './friend-info/friend-info.component';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    UserInfoComponent,
    ContactsComponent,
    ChatsComponent,
    NotificationsComponent,
    BackgroundsComponent,
    LoginFormComponent,
    WrapperComponent,
    CodeChangeFormComponent,
    EmailForCodeFormComponent,
    ErrorPageComponent,
    NewPasswordFormComponent,
    SignUpFormComponent,
    FriendInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
