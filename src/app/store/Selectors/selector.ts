import { createSelector } from '@ngrx/store';
import { IAppState } from '../state/app.state';

/**
 * Get App State
 */
export const getAppState = (state: IAppState): IAppState => state;

/**
 * Select Sections State
 */
export const selectSectionsState = createSelector(
    getAppState,
    (state: IAppState) => state.sections
)

/**
 * Select News State
 */
export const selectNewsState = createSelector(
    getAppState,
    (state: IAppState) => state.news
)