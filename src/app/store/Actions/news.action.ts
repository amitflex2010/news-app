import { Action } from '@ngrx/store';
import { NewsDetail } from 'src/app/model/NewsDetails';


export enum ENewsActions {
  GetNews = '[News] Get News',
  GetNewsSuccess = '[News] Get News Success',
  FilterSubSections = '[News] Filter Sub sections', 
  GetCurrentNews = '[News] Get Current News', 
  GetNewsFailure = '[News] Get News Failure' 
}

export class GetNews implements Action {
  public readonly type = ENewsActions.GetNews;
  constructor(public payload: string) {}
}

export class GetNewsSuccess implements Action {
  public readonly type = ENewsActions.GetNewsSuccess;
  constructor(public payload: NewsDetail[]) {}
}

export class GetNewsFailure implements Action {
    public readonly type = ENewsActions.GetNewsFailure;
    constructor(public payload: string) {}
}
export class FilterSubSection implements Action {
    readonly type = ENewsActions.FilterSubSections;
    constructor(public payload: string) {}
}

export class GetCurrentNews implements Action {
    readonly type = ENewsActions.GetCurrentNews;
    constructor(public payload: string) {}
}


export type NewsActions = GetNews | GetNewsSuccess | FilterSubSection | GetCurrentNews | GetNewsFailure;