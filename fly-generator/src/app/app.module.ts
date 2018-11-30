import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { FlightComponent } from './flight/flight.component';
import { MessageComponent } from './message/message.component';
import { MsgBgDirectiv } from './directives/msg.bg.directiv';

@NgModule({
  declarations: [
    AppComponent,
    FlightComponent,
    MessageComponent,
    MsgBgDirectiv
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
