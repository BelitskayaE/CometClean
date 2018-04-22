import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css',
  '../app.component.css']
})
export class ContactsComponent implements OnInit {
  contacts: string[];

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.httpService.getContacts()
      .subscribe((contacts: string[])=>{
          this.contacts = contacts;
        }
      );
  }

}
