import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../models/movie';

@Component({
  selector: 'app-display-movie',
  templateUrl: './display-movie.component.html',
  styleUrls: ['./display-movie.component.scss'],
})
export class DisplayMovieComponent implements OnInit {
  @Input() public movie!: Movie;
  @Output() deleteMovie = new EventEmitter<void>();
  @Output() editMovie = new EventEmitter<void>();

  constructor(private router: Router) {}

  delete() {
    this.deleteMovie.emit();
  }

  edit() {
    this.router.navigate(['/movie-creation', this.movie.id]);
  }

  ngOnInit(): void {}
}
