import { Component, OnInit, Input } from '@angular/core';
import { NewsDetail } from 'src/app/model/NewsDetails';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.css']
})
export class NewsItemComponent implements OnInit {

  @Input() news: NewsDetail;
  constructor() { }

  ngOnInit() {
  }

}
