import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
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

  constructor() {}

  delete() {
    this.deleteMovie.emit();
  }

  edit() {
    this.editMovie.emit();
  }

  ngOnInit(): void {}
}
