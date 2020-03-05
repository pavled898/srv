import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  constructor() { 
    console.log(this.isMobile)
  }

  ngOnInit() {
  }

}
