import { Component, OnInit } from '@angular/core';
import {NewsService} from "../../../services/news.service";

@Component({
  selector: 'app-international',
  templateUrl: './international.component.html',
  styleUrls: ['./international.component.css']
})
export class InternationalComponent implements OnInit {
  news =[];
  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.getInternationalNews();
  }

  getInternationalNews(){
    this.newsService.getInternationalNews()
      .subscribe((data:any)=>{
        this.news = data;
      });
  }

}
