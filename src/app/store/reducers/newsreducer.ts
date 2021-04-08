import { ENewsActions, NewsActions } from "../Actions/action";
import { initialNewsState, INewsState } from "../state/news.state";

export const NewsReducer = (
  state = initialNewsState,
  action: NewsActions
): INewsState => {
  switch (action.type) {
    case ENewsActions.GetNewsSuccess:
      console.log(action.payload);
      return {
        ...state,
        filterNewsSection:'',
        newsList: action.payload,
      };
    
    case ENewsActions.GetNewsFailure:
      return state;
    case ENewsActions.FilterSubSections:
      return {
        ...state,
        filterNewsSection: action.payload,
      };
    default:
      return state;
  }
};
