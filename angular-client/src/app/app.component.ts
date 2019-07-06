import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { TerminalService } from './services/terminal.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  verticalOrientation: boolean;
  groupName:string;

  constructor(private route: ActivatedRoute,private terminalService:TerminalService) {

    this.terminalService.groupName = window.location.hash.substring(1)

  }

  ngOnInit(): void {


    // window.addEventListener("orientationchange", () => {
    //   if (screen.height > screen.width) {
    //     this.verticalOrientation = true;
    //   }
    //   else {
    //     this.verticalOrientation = false;
    //   }
    // }, false);

  }
}
