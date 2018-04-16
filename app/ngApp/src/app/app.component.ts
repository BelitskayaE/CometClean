import {Component, OnInit} from '@angular/core';
import {HttpService} from './http.service';



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
  user: User[] = [];

  constructor(private httpService: HttpService){}

  ngOnInit(){
    this.httpService.getUserInfo()
      .subscribe((user: User[])=>{
      this.user = user;
      console.log(user);
    }
    );
  }


}
