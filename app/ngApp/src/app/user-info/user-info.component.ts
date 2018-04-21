import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service';
import {CookieService} from 'ngx-cookie-service';
import {Router} from '@angular/router'

interface User {
  email: string;
  name: string;
  surname: string;
  login: string;
  status: string;
  profile_foto: string;
}

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})


export class UserInfoComponent implements OnInit {
  cookieLogin: string;
  user: User;
  personalImage: any = '../../assets/profile_foto.png';


  constructor(private httpService: HttpService,
              private cookieService: CookieService,
              private router: Router) { }

  ngOnInit() {
    this.cookieLogin = this.cookieService.get('login');
    this.httpService.loadUserInfo(this.cookieLogin)
      .subscribe((user: User)=>{
          this.user = user;
          //console.log(user);
        }
      );
  }

  logout(){
    this.cookieService.delete('login');//or deleteAll();
    this.router.navigateByUrl('/app/login');
  }

}
