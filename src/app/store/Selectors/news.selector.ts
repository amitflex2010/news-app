import { createSelector } from '@ngrx/store';
import { selectNewsState } from './selector'
import { INewsState } from '../state/news.state';
import { INews } from 'src/app/model/newsdata';
import { NewsDetail } from 'src/app/model/NewsDetails';


export const selectNewsList = createSelector(
    selectNewsState,
  (state: INewsState) => state.newsList
);
export const getNewsSection = createSelector(
    selectNewsState,
    news => news.newsList
)

/**
 * Get Filter SubSection Section Selector
 */
export const getFilterSubSection = createSelector(
    selectNewsState,
    news => news.newsList.filter((item: NewsDetail) => {
        // section of news selected
        if (!news.filterNewsSection.length) {
            return item;
        } else {
            // subsection of news selected
            if (item.subsection === news.filterNewsSection) {
                return item;
            }
        }
    })
)

/**
 * Get Current News Section Selector
 */
export const getCurrentNewsSection = createSelector(
    selectNewsState,
    news => news.currentNewsSection
)
