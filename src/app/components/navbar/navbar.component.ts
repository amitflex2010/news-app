import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import {FilterSubSection} from '../../store/Actions/action';
import { IAppState } from '../../store/state/app.state';
import { Router } from '@angular/router';
import {Subject} from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import {selectNewsList} from '../../store/Selectors/news.selector'
import { INews } from 'src/app/model/newsdata';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  
  
  sectionNews: INews[];
  currentSubSection: string;
  subSectionsNavItems: string[] = [];
  unsubscribe: Subject<void> = new Subject();

  constructor(private _store: Store<IAppState>, private _router: Router) { }

  ngOnInit() {
   this.initSubscription();
  }

  initSubscription():void {
    this._store.pipe(select(selectNewsList))
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(
        sectionNews => {
          this.currentSubSection = '';
          this.subSectionsNavItems = [];
          for (const item of sectionNews) {
            // pulling all subsection which is unique and non empty
            if (item.subsection.length && !this.subSectionsNavItems.includes(item.subsection)) {
              this.subSectionsNavItems.push(item.subsection);
            }
          }
        }
      );
      console.log(this.subSectionsNavItems)
  }

  filterNews(filter: string): void {
    this.currentSubSection = filter;
    this._store.dispatch(
      new FilterSubSection(filter)
    );
  }

}
