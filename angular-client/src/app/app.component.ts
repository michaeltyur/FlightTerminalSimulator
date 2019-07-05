import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  verticalOrientation: boolean;

  constructor() { }

  ngOnInit(): void {
    window.addEventListener("orientationchange", () => {
      // Announce the new orientation number
      if (screen.height > screen.width) {
        this.verticalOrientation = true;
      }
      else {
        this.verticalOrientation = false;
      }
      // alert(screen.orientation);
    }, false);
  }

}