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

  constructor() {
    this._hubConnection = new HubConnectionBuilder()
      .withUrl("http://michaelt-001-site1.btempurl.com/terminal")
      .build();
    this._hubConnection
      .start()
      .then(() => console.log("Connection started!"))
      .catch(err => {
        console.error("Error while establishing connection :(");
        location.reload();
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
