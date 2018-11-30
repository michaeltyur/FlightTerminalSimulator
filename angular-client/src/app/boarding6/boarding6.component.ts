import { Component, OnInit,Input } from '@angular/core';
import { Flight } from '../models/flight';
import { TerminalService } from '../services/terminal.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {ModalContentComponent} from '../modal-content/modal-content.component'

@Component({
  selector: 'app-boarding6',
  templateUrl: './boarding6.component.html',
  styleUrls: ['./boarding6.component.css']
})
export class Boarding6Component implements OnInit {

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
       if(element.planeTerminalState==6)
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
