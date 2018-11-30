import { Component, OnInit,Input } from '@angular/core';
import { Flight } from '../models/flight';
import { TerminalService } from '../services/terminal.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-content',
  templateUrl: './modal-content.component.html',
  styleUrls: ['./modal-content.component.css']
})
export class ModalContentComponent implements OnInit {

  //flight:Flight;
  @Input() flight:Flight;
  constructor(private terminalService: TerminalService,public activeModal: NgbActiveModal) { 
   // terminalService.selectedFlight$.subscribe(res=>this.flight=res);
  }

  ngOnInit() {
  }

}
