import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MonCompteComponent } from './mon-compte/mon-compte.component';
import { CorsusComponent } from './corsus/corsus.component';
import { InfoPersoComponent } from './info-perso/info-perso.component';
import { DiversComponent } from './divers/divers.component';

@NgModule({
  declarations: [
    AppComponent,
    MonCompteComponent,
    CorsusComponent,
    InfoPersoComponent,
    DiversComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
