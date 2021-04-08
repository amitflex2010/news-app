import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { environment } from '../environments/environment';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SectionsComponent } from './components/sections/sections.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NewsComponent } from './components/news/news.component';
import { NewsItemComponent } from './components/news-item/news-item.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HeaderComponent } from './components/header/header.component';
import { StoreModule } from '@ngrx/store';
import {  AppReducers } from './store/reducers/appreducers';
import { EffectsModule } from '@ngrx/effects';
import { NewsEffects } from './store/Effects/effects';
import {NewsService} from './services/news-service.service';

@NgModule({
  declarations: [
    AppComponent,
    SectionsComponent,
    NavbarComponent,
    NewsComponent,
    NewsItemComponent,
    PageNotFoundComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot( AppReducers ),
    EffectsModule.forRoot([NewsEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : []
    
  ],
  providers: [NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
