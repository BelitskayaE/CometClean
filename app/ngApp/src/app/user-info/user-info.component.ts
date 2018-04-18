import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service';


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
  user: User;
  personalImage: any = '../../assets/profile_foto.png';
  constructor(private httpService: HttpService) { }

  ngOnInit() {
      this.httpService.getUserInfo()
      .subscribe((user: User)=>{
          this.user = user;
          console.log(user);
        }
      );
  }

}
