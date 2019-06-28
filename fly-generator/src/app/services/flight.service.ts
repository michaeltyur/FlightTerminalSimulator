import { Injectable, OnInit } from "@angular/core";
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
  connectTimer;
  time: number;
  msgService: MessageService;

  flightControlUrl: string = "/api/flight";
  remoteUrl = "http://michaelt-001-site1.btempurl.com/terminal";
  localUrl = "http://localhost:12345/terminal";
  currentUrl;

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {
    this.currentUrl = this.remoteUrl;
    this.time = 3000;
    this.starthubConnection();
    this._hubConnection.onclose(err => {
      this.tryConnect();
    });
    // this.flyGeneratorStart();
  }
  starthubConnection() {
    this._hubConnection = new HubConnectionBuilder()
      .withUrl(this.remoteUrl)
      .build();
    this._hubConnection
      .start()
      .then(() => {
        console.log("Connection started!");
        if (this.connectTimer) {
          clearInterval(this.connectTimer);
        }
        this.messageService.alertMsgEmitter(
          "alert-success",
          "Connection started!"
        );
      })
      .catch(err => {
        console.log("Error while establishing connection :(");

        this.messageService.alertMsgEmitter(
          "alert-danger",
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
    this._hubConnection.invoke("SendFlight", flight).catch(function(err) {
      // alert(err.toString());
      location.reload();
      return console.error(err.toString());
    });
  }

  tryConnect(): void {
    this.connectTimer = setInterval(() => {
      this.messageService.alertMsgEmitter(
        "alert-warning",
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
    this.flyGeneratorStart();
  }
  flyGeneratorStop() {
    if (this.interval) {
      clearInterval(this.interval);
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

    this.messageService.messageEmitter(flight);

    return flight;
  }
}
