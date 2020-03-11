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
    const mobileCta = document.querySelectorAll(".btn--mobile-cta");

    mobileCta.forEach( (btn: HTMLElement) => {
      btn.style.display = this.isMobile ? "inline-block" : "none";
    })
    
    window.addEventListener("hashchange", function () {
      window.scrollTo(window.scrollX, window.scrollY - (this.window.innerHeight / 100 * 7));
  });
  }
}
