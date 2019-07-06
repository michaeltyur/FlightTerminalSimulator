import { Component, OnInit } from '@angular/core';
import { TerminalService } from '../services/terminal.service';

@Component({
  selector: 'app-connection-info',
  templateUrl: './connection-info.component.html',
  styleUrls: ['./connection-info.component.css']
})
export class ConnectionInfoComponent implements OnInit {
  connectionInfo:string;
  connectionStatus:boolean;
  constructor(private terminalService: TerminalService) { }

  ngOnInit() {
    this.terminalService.connectionStatus$.subscribe(res=>
      {
        this.connectionStatus=res.connectionStatus;
        this.connectionInfo=res.connectionInfo;
      });
  }

}
