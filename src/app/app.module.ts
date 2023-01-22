import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SimpleAnimationComponent} from "./simple-animation/simple-animation.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { StatesAnimationComponent } from './states-animation/states-animation.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleAnimationComponent,
    StatesAnimationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
