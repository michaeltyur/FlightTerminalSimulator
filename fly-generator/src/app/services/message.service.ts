import { Injectable,EventEmitter } from '@angular/core';
import { Flight } from '../models/flight';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

message$ = new EventEmitter<Flight>();
alertMsg$=new EventEmitter<AlertMsg>();

  constructor() { }

  messageEmitter(flight:Flight){
    if(flight)
      this.message$.emit(flight);
  }
  alertMsgEmitter(type:string,content:string){
    this.alertMsg$.emit({type:type,content:content});
  }
}
