import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['../app.component.css']
})
export class IndexComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  title = 'your new application';

}
