import { Component, OnInit,Input } from '@angular/core';
import { Flight } from '../models/flight';
import { TerminalService } from '../services/terminal.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {ModalContentComponent} from '../modal-content/modal-content.component'

@Component({
  selector: 'app-boarding7',
  templateUrl: './boarding7.component.html',
  styleUrls: ['./boarding7.component.css']
})
export class Boarding7Component implements OnInit {

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
       if(element.planeTerminalState==7)
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
