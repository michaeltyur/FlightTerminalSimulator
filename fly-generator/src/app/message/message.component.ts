import { Component, OnInit } from '@angular/core';
import { Flight } from '../models/flight';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  flights:Flight[]=[];

  constructor(private messageService:MessageService) { }

  ngOnInit() {
    this.messageService.message$.subscribe(res=>
      {
        if(this.flights.length>2)
           //this.messages.splice(0, 1);
           this.flights.shift();
        this.flights.push(res);
      });

      this.messageService.clearMsg$.subscribe(res=>
        {
          if(res)
          this.flights=[];
        });
  }


}
