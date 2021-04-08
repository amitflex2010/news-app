import { ActionReducerMap } from '@ngrx/store';


import { IAppState } from '../state/app.state';

import { NewsReducer } from './newsreducer';
import {SectionReducer}from './sectionreducer'

export const AppReducers: ActionReducerMap<IAppState, any> = {
  
  news: NewsReducer,
  sections: SectionReducer
  
};