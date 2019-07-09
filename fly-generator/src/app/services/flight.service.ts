import { Injectable, OnInit, EventEmitter } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Flight } from "../models/flight";
import { HubConnection, HubConnectionBuilder } from "@aspnet/signalr";
import { UUID } from "angular2-uuid";
import { CITIES, NAMESOFPILOTS } from "../models/constants";
import { MessageService } from "./message.service";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};

@Injectable({
  providedIn: "root"
})
export class FlightService {
  private _hubConnection: HubConnection;

  interval;
  timeInterval = 3;
  connectTimer;
  time: number;

  connectionStatus$ = new EventEmitter();

  flightControlUrl: string = "/api/flight";
  currentUrl = "http://michaelt-001-site1.btempurl.com/terminal";
  //currentUrl = "http://localhost:12345/terminal";
  terminalReceiverUrl = "http://michaelt-001-site2.btempurl.com";
  connectionId$ = new EventEmitter();
  connectionId: string;

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {

    this.time = 3000;
    this.starthubConnection();
    this._hubConnection.onclose(err => {
      this.tryConnect();
    });
    // this.flyGeneratorStart();
  }
  starthubConnection() {
    this._hubConnection = new HubConnectionBuilder()
      .withUrl(this.currentUrl)
      .build();
    this._hubConnection
      .start()
      .then(() => {

        this._hubConnection.on("BroadcastFlight", (flight: Flight) => {
          this.messageService.flightEmitter(flight);
          // this.messageEmitter$.emit(message);
        });

        if (this.connectTimer) {
          clearInterval(this.connectTimer);
        }
        this.messageService.alertMsgEmitter(
          "success",
          "Connection started!"
        );
      })
      .catch(err => {
        console.error("Error while establishing connection :(");
        if (this.currentUrl==="http://michaelt-001-site1.btempurl.com/terminal") {
          this.currentUrl="http://localhost:12345/terminal"
        }
        else{
          this.currentUrl="http://michaelt-001-site1.btempurl.com/terminal"
        }
        this.starthubConnection();
        this.messageService.alertMsgEmitter(
          "danger",
          "Error while establishing connection :("
        );
      });
  }

  sendFly(): void {
    let fly = this.getRundomFly();
    this.http.post<Flight>(this.flightControlUrl, fly).subscribe();
  }

  //WebSocket/SignalR
  sendFlight(): void {
    let flight = this.getRundomFly();
    this._hubConnection.invoke("SendFlight", flight).catch((err) => {
      this.flyGeneratorStop();
      this.connectionStatus$.emit(false);
      return console.error(err.toString());
    });
  }

  tryConnect(): void {
    this.connectTimer = setInterval(() => {
      this.messageService.alertMsgEmitter(
        "warning",
        "Connection will be restarted"
      );
      this.starthubConnection();
    }, 3000);
  }

  flyGeneratorStart() {
    this.interval = setInterval(() => {
      this.sendFlight();
    }, this.time);
  }

  changeTimerInterval(time: number) {
    this.flyGeneratorStop();
    this.time = time;
    // this.flyGeneratorStart();
  }

  flyGeneratorStop() {
    if (this.interval) {
      clearInterval(this.interval);
      this.messageService.clearMsg();
    }
  }

  randomNumber(min: number, max: number): number {
    var result = 0;
    while (result < min || result > max) {
      result = Math.floor(Math.random() * (max + min + 1) + min);
    }
    return result;
  }

  getRundomFly(): Flight {
    let flight = new Flight();
    flight.id = UUID.UUID(); //new Date().toString().replace(' GMT+0200 (Israel Standard Time)','').replace(/ /g,'_');

    flight.speed = this.randomNumber(300, 700);

    flight.numberOfPass = this.randomNumber(50, 300);

    flight.fuel = this.randomNumber(20, 100);

    flight.distanceToTerminal = this.randomNumber(350, 400);

    while (!flight.nameOfСhiefPilot) {
      flight.nameOfСhiefPilot =
        NAMESOFPILOTS[this.randomNumber(1, NAMESOFPILOTS.length)];
    }
    while (!flight.from) {
      flight.from = CITIES[this.randomNumber(1, CITIES.length)];
    }

    //this.messageService.messageEmitter(flight);

    return flight;
  }

  getConnectionId(): Promise<any> {
    return this._hubConnection.invoke("GetConnectionId");
  }
}
