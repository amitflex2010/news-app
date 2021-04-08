import { Component, OnInit } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { Router } from "@angular/router";
import { Store, select } from "@ngrx/store";
import { takeUntil } from 'rxjs/operators';
import { IAppState } from "../../store/state/app.state";
import {getAllSections} from '../../store/Selectors/section.selector'
import { GetNews } from "src/app/store/Actions/news.action";

@Component({
  selector: "app-sections",
  templateUrl: "./sections.component.html",
  styleUrls: ["./sections.component.css"],
})
export class SectionsComponent implements OnInit {
  filteredSection$: Observable<Array<string>>;
  sections: Array<string> = [];
  unsubscribe: Subject<void> = new Subject();
  router:Router;

  constructor(private _store: Store<IAppState>, private _router: Router) {}

  ngOnInit() {

    this.initSubscription();
  }

  ngDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  initSubscription(): void {
    this.filteredSection$ = this._store.pipe(select(getAllSections));
    this._store.pipe(select(getAllSections))
    .pipe(takeUntil(this.unsubscribe))
    .subscribe(
      allSections => {
        this.sections = allSections;
      }
    );
  }

  sectionNews(section: string): void {
    this.router.navigate(['/section', section]);
  }
}
