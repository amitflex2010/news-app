import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment'
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { INews } from '../model/newsdata';
@Injectable({
  providedIn: 'root'
})
export class NewsService {

  
  constructor(private http: HttpClient) { }

  getSectionNews(selectedItem):Observable<INews> {
    let apiURL = '';
    let apiKEY = '';
    if(environment.production) {
       apiURL = environment.baseUrl+selectedItem;
       apiKEY = environment.apikey;
    } else {
       apiURL = environment.baseUrl+selectedItem;
       apiKEY = environment.apikey;
    }
    
    const endpointURL = apiURL+'.json?api-key='+apiKEY;
    return this.http.get<INews>(endpointURL)
    .pipe(
      tap(data => data),
      catchError(this.handleError) 
    )
  }

  /**
   * Handle error
   * @param err - error in response
   */
   handleError(err) {
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // back-end returned an unsuccessful response code & response body may contain what went wrong.
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }
}
