import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment} from "../../environments/environment";



@Injectable({
  providedIn: 'root'
})
export class NewsService {
  env = environment;

  httpHeaders = new HttpHeaders({
    'Content-type': 'application/json',
  });

  constructor(private http: HttpClient) { }
/*https://newsapi.org/v2/top-headlines?country=us&apiKey=acb4d6e266f946b0a39577831fcc7f08 */
  getCurrentNews() {
    return this.http.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=acb4d6e266f946b0a39577831fcc7f08');

  }

  getLocalNews(){

  }
  getInternationalNews(){

  }
}
