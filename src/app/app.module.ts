import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocalComponent } from './components/news/local/local.component';
import { CurrentComponent } from './components/news/current/current.component';
import { InternationalComponent } from './components/news/international/international.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';

//Servicios
import { NewsService } from './services/news.service';
import { CardItemComponent } from './components/news/card-item/card-item.component';

@NgModule({
  declarations: [
    AppComponent,
    LocalComponent,
    CurrentComponent,
    InternationalComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent,
    CardItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    NewsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
