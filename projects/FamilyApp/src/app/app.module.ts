import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TambolaLibModule } from 'tambola-lib';
import { TambolaComponent } from './components/tambola/tambola.component';

@NgModule({
  declarations: [
    AppComponent,
    TambolaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    TambolaLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
