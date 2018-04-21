import {Component, OnInit} from '@angular/core';
import {HttpService} from './http.service';
import { CookieService } from 'ngx-cookie-service';
import {Router} from '@angular/router';


interface User {
    email: string;
    name: string;
    surname: string;
    login: string;
    status: string;
    profile_foto: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HttpService]
})
export class AppComponent implements OnInit{
  //cookieLogin = 'UNKNOWN';
  user: User;

  constructor(
    private cookieService: CookieService,
    private httpService: HttpService,
    private router: Router){}

  ngOnInit(){
    if (!this.cookieService.get('login')){
      this.router.navigateByUrl('/app/login');
    }

    /*
    //this.cookieService.set('Test', 'lalala');
    this.cookieLogin = this.cookieService.get('login');
    this.httpService.loadUserInfo()
      .subscribe((user: User)=>{
      this.user = user;
      //console.log(user);
    }
    );*/
  }


}
