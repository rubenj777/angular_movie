import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieCreationComponent } from './movie-creation/movie-creation.component';
import { DisplayMovieComponent } from './display-movie/display-movie.component';
import { MovieFormComponent } from './movie-form/movie-form.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    MovieCreationComponent,
    DisplayMovieComponent,
    MovieFormComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
