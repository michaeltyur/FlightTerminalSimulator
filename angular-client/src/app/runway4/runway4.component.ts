import { Component, OnInit,Input } from '@angular/core';
import { Flight } from '../models/flight';
import { TerminalService } from '../services/terminal.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {ModalContentComponent} from '../modal-content/modal-content.component'

@Component({
  selector: 'app-runway4',
  templateUrl: './runway4.component.html',
  styleUrls: ['./runway4.component.css']
})
export class Runway4Component implements OnInit {

 flights : Flight[]=[];

  constructor(private terminalService: TerminalService, private modalService: NgbModal) { 
    this.terminalService.terminalEmitter$.subscribe(res=>
      {
         this.fillArray(res);
     });
  }

  ngOnInit() {
  }
  fillArray(flight:Flight[]):void{
    this.flights=[];
    flight.forEach(element => {
       if(element.planeTerminalState==4||element.planeTerminalState==9)
       {
         this.flights.push(element);
       }
     });
   }
   open(flight:Flight) {
    if (flight) {
      const modalRef = this.modalService.open(ModalContentComponent);
      modalRef.componentInstance.flight = flight;
    } 
  }
}
