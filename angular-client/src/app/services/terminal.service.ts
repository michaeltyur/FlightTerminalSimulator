import { Injectable, OnInit, EventEmitter } from "@angular/core";
import { HubConnection, HubConnectionBuilder } from "@aspnet/signalr";

import { Flight, PlaneTerminalState } from "../models/flight";

@Injectable({
  providedIn: "root"
})
export class TerminalService {
  private _hubConnection: HubConnection;

  messageEmitter$ = new EventEmitter();
  terminalEmitter$ = new EventEmitter();
  selectedFlight$ = new EventEmitter<Flight>();

  currentUrl = "http://michaelt-001-site1.btempurl.com/terminal";
 // currentUrl="http://localhost:12345/terminal";

  connectionStatus$= new EventEmitter();;

  constructor() {

    this._hubConnection = new HubConnectionBuilder()
      .withUrl(this.currentUrl)
      .build();
    this._hubConnection
      .start()
      .then(() => {
        this.connectionStatus$.emit({connectionStatus:true,connectionInfo:"Connection started!"})
        console.log("Connection started!");
      })
      .catch(err => {
        this.connectionStatus$.emit({connectionStatus:false,connectionInfo:"Error while establishing connection :("})
        console.error("Error while establishing connection :(");
        //location.reload();
      });

    this._hubConnection.onclose(() => location.reload());

    this._hubConnection.on("BroadcastMessage", (message: Message) => {
      this.messageEmitter$.emit(message);
    });
    this._hubConnection.on("BroadcastTerminal", (flights: Flight[]) => {
      this.terminalEmitter$.emit(flights);
    });
  }
  sendSelectedFlight(flight: Flight): void {
    if (flight) {
      this.selectedFlight$.emit(flight);
    }
  }
}
