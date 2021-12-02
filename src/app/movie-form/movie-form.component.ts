import { Component, Input, NgModule, OnInit } from '@angular/core';
import { Movie } from '../models/movie';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.scss'],
})
export class MovieFormComponent implements OnInit {
  @Input() public movie!: Movie;
  movieName: string = this.movie.name;

  constructor() {}

  ngOnInit(): void {}
}
