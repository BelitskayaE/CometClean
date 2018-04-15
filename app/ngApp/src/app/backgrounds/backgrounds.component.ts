import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-backgrounds',
  templateUrl: './backgrounds.component.html',
  styleUrls: ['./backgrounds.component.css']
})
export class BackgroundsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.changeBackground();
  }
  //в функции возникает ошибка, но функция работает
  changeBackground() {
    var c = document.querySelector('#payt2');
    c.onclick = function () {
      if (c.checked) {
        document.body.style.background = 'url(../assets/comet.jpg)';
      } else {
        document.body.style.background = 'url(https://cdn.pixabay.com/photo/2016/05/24/16/48/mountains-1412683_960_720.png)';
      }
    }
  }
}

/*
*/
