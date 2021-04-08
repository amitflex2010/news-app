import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { EMPTY, of } from "rxjs";
import { catchError, map, mergeMap, switchMap } from "rxjs/operators";
import { ENewsActions, GetNews, GetNewsFailure } from "../Actions/action";
import { NewsService } from "../../services/news-service.service";

@Injectable()
export class NewsEffects {
  @Effect()
  loadNews$ = this.actions$.pipe(
    ofType(ENewsActions.GetNews),
    mergeMap((action: GetNews) =>
      this.newsService.getSectionNews(action.payload).pipe(
        map((news) => {
          return { type: ENewsActions.GetNewsSuccess, payload: news.results };
        }),
        catchError((error) => of(new GetNewsFailure(error)))
      )
    )
  );

  constructor(private actions$: Actions, private newsService: NewsService) {}
}
