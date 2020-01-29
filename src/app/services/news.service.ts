import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class NewsService {
  env = environment;

  httpHeaders = new HttpHeaders({
    'Content-type': 'application/json',
  });

  constructor(private http: HttpClient) {

  }

  getCurrentNews() {
   return  this.http.get(this.env.URI+"top-headlines?country=mx&apiKey="+ this.env.API)
      .pipe( map(data => {
        return data['articles'];
    }));
  }

  getLocalNews(){
    return  this.http.get(this.env.URI+"top-headlines?country=us&apiKey="+ this.env.API)
      .pipe( map(data => {
        return data['articles'];
      }));
  }
  getInternationalNews(){
    return  this.http.get(this.env.URI+"top-headlines?sources=bbc-news&apiKey="+ this.env.API)
      .pipe( map(data => {
        return data['articles'];
      }));
  }
}
