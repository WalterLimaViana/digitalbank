import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NovatransferenciaComponent } from './nova-transferencia/nova-transferencia.component';

@NgModule({
  declarations: [
    AppComponent,
    NovatransferenciaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
