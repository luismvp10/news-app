import { Component, OnInit } from '@angular/core';
import {Location, LocationStrategy, PathLocationStrategy } from "@angular/common";
import { NewsService } from '../../../services/news.service';

@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.css']
})
export class CurrentComponent implements OnInit {
  news = [];
  constructor(private newService: NewsService) { }

  ngOnInit() {
    this.getCurrentNews();

  }

  getCurrentNews(){
   this.newService.getCurrentNews()
     .subscribe((data:any) =>{
       this.news = data;
     });

  }
}
