import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';

@Injectable()
export class HttpService {
  private serverApi = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getUserInfo() {
    return this.http.get(this.serverApi + '/getUserInfo');
  }

  checkUser() {
    return this.http.get(this.serverApi + '/login_user');
  }

}
