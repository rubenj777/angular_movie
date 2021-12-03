import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie';
import { MovieService } from '../movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent implements OnInit {
  tabMovie: Movie[] = [];

  constructor(public singletonMovie: MovieService, private router: Router) {
    this.tabMovie = this.singletonMovie.tabMovie;
  }

  delete(movie: Movie) {
    let index = this.tabMovie.indexOf(movie);
    this.tabMovie.splice(index, 1);
  }

  edit(movie: Movie) {
    this.router.navigate(['movie-creation']);
    console.log('click');
    let index = this.tabMovie.indexOf(movie);
  }

  ngOnInit(): void {}
}
