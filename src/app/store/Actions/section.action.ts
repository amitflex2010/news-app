import { Action } from '@ngrx/store';

export enum ESectionActions {
    LoadSection = '[Section] Load Section',
    SetCurrentSection = '[Section] Set Current Section' 
}

export class LoadSection implements Action {
    public readonly type = ESectionActions.LoadSection;
  }
  
  export class SetCurrentSection implements Action {
    public readonly type = ESectionActions.SetCurrentSection;
    constructor(public payload: string) {}
  }
  
  
  export type SectionActions = LoadSection | SetCurrentSection;