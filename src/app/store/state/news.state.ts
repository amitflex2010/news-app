import { NewsDetail } from 'src/app/model/NewsDetails';

export interface INewsState {
  newsList: NewsDetail[],
  currentNewsSection: string,
  filterNewsSection: string,
}
export const initialNewsState: INewsState = {
  newsList: [],
  currentNewsSection: '',
  filterNewsSection: ''
};