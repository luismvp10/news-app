import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocalComponent } from './components/news/local/local.component';
import { CurrentComponent } from './components/news/current/current.component';
import { InternationalComponent } from './components/news/international/international.component';

@NgModule({
  declarations: [
    AppComponent,
    LocalComponent,
    CurrentComponent,
    InternationalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
