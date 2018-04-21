import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';

@Injectable()
export class HttpService {
  private serverApi = environment.apiUrl;

  constructor(private http: HttpClient) { }

  loadUserInfo(login) {
    return this.http.post(this.serverApi + '/api/postUserInfo', login);
  }

  checkUser(data) {
    return this.http.post(this.serverApi + '/api/loginUser', data);
  }

  authUser(login){
    return this.http.post(this.serverApi + '/app/authUser', login);
  }

}
