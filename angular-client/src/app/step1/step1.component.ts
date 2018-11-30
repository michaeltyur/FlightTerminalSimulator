import { Component, OnInit, Input } from '@angular/core';
import { Flight } from '../models/flight';
import { TerminalService } from '../services/terminal.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {ModalContentComponent} from '../modal-content/modal-content.component'

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.css']
})
export class Step1Component implements OnInit {

flights : Flight[]=[];
  
  constructor(private terminalService: TerminalService, private modalService: NgbModal) {
    this.terminalService.terminalEmitter$.subscribe(res=>
      {
         this.fillArray(res);
     });
   }

ngOnInit() {}

fillArray(flight:Flight[]):void{
  this.flights=[];
  flight.forEach(element => {
     if(element.planeTerminalState==1)
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
