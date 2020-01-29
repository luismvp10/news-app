import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment} from "../../environments/environment";
import {map} from "rxjs/operators";



@Injectable({
  providedIn: 'root'
})
export class NewsService {
  env = environment;

  httpHeaders = new HttpHeaders({
    'Content-type': 'application/json',
  });

  constructor(private http: HttpClient) {
this.getCurrentNews();
    console.log("Servicio funcionando");
  }

  getCurrentNews() {
   return  this.http.get(this.env.URI+"top-headlines?country=us&apiKey="+ this.env.API)
      .pipe( map(data => {
        return data['articles'];
    }));


  }

  getLocalNews(){

  }
  getInternationalNews(){

  }
}
