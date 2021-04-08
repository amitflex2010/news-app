import { NewsDetail } from './NewsDetails';

export interface INews {
  status: string;
  copyright: string;
  section: string;
  last_updated: Date;
  num_results: number;
  results:NewsDetail[];
  }