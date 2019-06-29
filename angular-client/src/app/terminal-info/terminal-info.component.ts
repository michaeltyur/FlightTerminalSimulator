import { Component, OnInit,Input, EventEmitter } from '@angular/core';
import { Flight } from '../models/flight';
import { TerminalService } from '../services/terminal.service';

@Component({
  selector: 'app-terminal-info',
  templateUrl: './terminal-info.component.html',
  styleUrls: ['./terminal-info.component.css']
})
export class TerminalInfoComponent implements OnInit {

  flights : Flight[]=[];
  counters:number[]=[];
   connectionInfo:string;
   connectionStatus:boolean;
 

  constructor(private terminalService: TerminalService) {

    terminalService.terminalEmitter$.subscribe(res=>{
     this.flights=res;
     this.fillZoneCounters();
    })
   }

  ngOnInit() {
    this.terminalService.connectionStatus$.subscribe(res=>
      {
        this.connectionStatus=res.connectionStatus;
        this.connectionInfo=res.connectionInfo;
      });
  }
 fillZoneCounters():void{
  this.counters=[0,0,0,0,0,0,0,0,0];
    this.flights.forEach(element => {
      switch (element.planeTerminalState) {
        case 1:
          this.counters[0]++;
          break;
          case 2:
          this.counters[1]++;
          break;
          case 3:
          this.counters[2]++;
          break;
          case 4:
          case 9:
          this.counters[3]++;
          break;
          case 5:
          this.counters[4]++;
          break;
          case 6:
          this.counters[5]++;
          break;
          case 7:
          this.counters[6]++;
          break;
          case 8:
          this.counters[7]++;
          break;

      }
    });
 }

}
