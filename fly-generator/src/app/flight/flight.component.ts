import { Component, OnInit } from '@angular/core';
import { Flight } from '../models/flight';
import { FlightService } from '../services/flight.service';
import { MessageService } from '../services/message.service';


@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css']
})
export class FlightComponent implements OnInit {

  newFly:Flight;
  alertMsg:AlertMsg;
  timeInterval:number;

  constructor(
             private flightService:FlightService,
             private msgService:MessageService) { 

    this.timeInterval=3;
    msgService.alertMsg$.subscribe(res=>this.alertMsg=res);

  }

  ngOnInit() {
  }

  startFlyGeneration(){   
    this.msgService.clearMsg();
    this.stopFlyGeneration();  
    this.flightService.flyGeneratorStart();
  }
  startOnce(){    
    this.msgService.clearMsg(); 
    this.stopFlyGeneration();
    this.flightService.sendFlight();
  }

  stopFlyGeneration(){     
    this.flightService.flyGeneratorStop();
  }

  setTimer(time:number)
  {
    if(time)
    {
      this.flightService.changeTimerInterval(time*1000);
    }
    
  }

  setTimeInterval(data:number):void{
    if (this.timeInterval>1) {
      this.timeInterval= this.timeInterval+data;
      this.setTimer(this.timeInterval);
    }
  }
}
