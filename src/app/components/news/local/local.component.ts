import { Component, OnInit } from '@angular/core';
import {NewsService} from "../../../services/news.service";

@Component({
  selector: 'app-local',
  templateUrl: './local.component.html',
  styleUrls: ['./local.component.css']
})
export class LocalComponent implements OnInit {
  news = [];
  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.getLocalNews();
  }

  getLocalNews(){
    this.newsService.getLocalNews()
      .subscribe((data:any) => {
        this.news = data;
      });
  }

}
