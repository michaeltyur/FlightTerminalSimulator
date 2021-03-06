import { Component, OnInit } from '@angular/core';
import { HubConnection, HubConnectionBuilder } from '@aspnet/signalr';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { Flight, PlaneTerminalState } from '../models/flight';
import { TerminalService } from '../services/terminal.service';
declare var $: any;
@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.css']
})
export class TerminalComponent implements OnInit {
  private _hubConnection: HubConnection;
  // connectionInfo:string="nnhnn";
  // connectionStatus:boolean;

  msgs: Message[] = [];
  closeResult: string;

  flights: Flight[];
  selectedFlight: Flight;


  constructor(private terminalService: TerminalService, private modalService: NgbModal) {
    terminalService.selectedFlight$.subscribe(res => {
      this.selectedFlight = res
    });

    this.flights = [];
  }

  ngOnInit() {
    this.terminalService.messageEmitter$.subscribe((res: Message) => {
      if (window.innerHeight < 400) {
        this.msgs = [];
        this.msgs.push(res);

      }
      else if (this.msgs.length > 2) {
        this.msgs.shift();
        this.msgs.push(res);
      }
      else this.msgs.push(res);


    });
    this.terminalService.terminalEmitter$.subscribe((res: Flight[]) => {
      this.flights = res;
    });
  }
  open(content) {
    this.modalService.open(content);
  }

  openModal(modalId:string):void{
    (<any>$)(modalId).modal('show');
  }

}
