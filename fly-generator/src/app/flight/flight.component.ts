import { Component, OnInit } from '@angular/core';
import { Flight } from '../models/flight';
import { FlightService } from '../services/flight.service';
import { MessageService } from '../services/message.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css']
})
export class FlightComponent implements OnInit {

  newFly: Flight;
  alertMsg: AlertMsg;
  timeInterval: number;
  flight;
  terminalReceiverUrl: string='http://localhost:4200';
  connectionStatus: boolean;

  constructor(
    private flightService: FlightService,
    private msgService: MessageService,
    private router:Router) {

    this.timeInterval = 3;
    msgService.alertMsg$.subscribe(res => {
      this.alertMsg = res;
    });

  }

  ngOnInit() {

    // this.flightService.connectionId$.subscribe(res=>{
    //   this.terminalReceiverUrl+=res;
    // },error=>console.error(error));
    this.terminalReceiverUrl=this.flightService.terminalReceiverUrl;
    this.msgService.message$.subscribe(res => {
      if (res)
        this.flight = res;
    });
  }

  startFlyGeneration() {
    this.msgService.clearMsg();
    this.stopFlyGeneration();
    this.flightService.flyGeneratorStart();
  }
  startOnce() {
    this.msgService.clearMsg();
    this.stopFlyGeneration();
    this.flightService.sendFlight();
  }

  stopFlyGeneration() {
    this.flight = null;
    this.flightService.flyGeneratorStop();
  }

  setTimer(time: number) {
    if (time) {
      this.flightService.changeTimerInterval(time * 1000);
    }

  }

  setTimeInterval(data: number): void {
    if (this.timeInterval > 1) {
      this.timeInterval = this.timeInterval + data;
      this.setTimer(this.timeInterval);
    }
  }
}
