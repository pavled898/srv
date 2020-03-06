import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title = 'Servis Računara';

  isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  ngOnInit() {
    const mobileCta: HTMLElement = document.querySelector(".btn--mobile-cta");
    console.log(mobileCta)
    mobileCta.style.display = this.isMobile ? "inline-block" : "none";
  }
}
