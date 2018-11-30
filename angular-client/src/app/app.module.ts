import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule,} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { TerminalComponent } from './terminal/terminal.component';
import { Step1Component } from './step1/step1.component';
import { Step2Component } from './step2/step2.component';
import { Step3Component } from './step3/step3.component';
import { Runway4Component } from './runway4/runway4.component';
import { Parking5Component } from './parking5/parking5.component';
import { Boarding6Component } from './boarding6/boarding6.component';
import { Boarding7Component } from './boarding7/boarding7.component';
import { Parking8Component } from './parking8/parking8.component';
import { TerminalInfoComponent } from './terminal-info/terminal-info.component';
import { ModalContentComponent } from './modal-content/modal-content.component';
import { PlaneComponent } from './plane/plane.component';

@NgModule({
  declarations: [
    AppComponent,
    TerminalComponent,
    Step1Component,
    Step2Component,
    Step3Component,
    Runway4Component,
    Parking5Component,
    Boarding6Component,
    Boarding7Component,
    Parking8Component,
    TerminalInfoComponent,
    ModalContentComponent,
    PlaneComponent
  ],
  entryComponents: [ModalContentComponent],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
