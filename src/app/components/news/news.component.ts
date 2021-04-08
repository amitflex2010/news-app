import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Store, select } from "@ngrx/store";

import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { NewsDetail } from "src/app/model/NewsDetails";
import { IAppState } from "src/app/store/state/app.state";
import { GetNews } from "../../store/Actions/action";
import {getFilterSubSection} from '../../store/Selectors/news.selector'

@Component({
  selector: "app-news",
  templateUrl: "./news.component.html",
  styleUrls: ["./news.component.css"],
})
export class NewsComponent implements OnInit {
  sectionNews: NewsDetail[];
  unsubscribe: Subject<void> = new Subject();

  constructor(
    private _store: Store<IAppState>,
    private _route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.initSubscription();
  }

  initSubscription(): void {
    this._route.params.pipe(takeUntil(this.unsubscribe)).subscribe((params) => {
      this._store.dispatch(new GetNews(params.section));
    });

    this._store.pipe(select(getFilterSubSection))
    .pipe(takeUntil(this.unsubscribe))
    .subscribe(
      sectionNews => {
        this.sectionNews = sectionNews;
      }
    );
  }
}
