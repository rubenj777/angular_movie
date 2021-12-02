import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent implements OnInit {
  tabMovie: Movie[] = [];

  constructor(public singletonMovie: MovieService) {
    this.tabMovie = this.singletonMovie.tabMovie;
  }

  delete(movie: Movie) {
    let index = this.tabMovie.indexOf(movie);
    this.tabMovie.splice(index, 1);
  }

  ngOnInit(): void {}
}
