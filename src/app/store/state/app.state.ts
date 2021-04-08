import { INewsState, initialNewsState } from './news.state';
import { ISectionsState, initialSectionsState } from './section.state';

export interface IAppState { 
    news: INewsState;
    sections: ISectionsState
  }
  
  export const initialAppState: IAppState = {
    news: initialNewsState,
    sections: initialSectionsState
  };
  
  export function getInitialState(): IAppState {
    return initialAppState;
  }