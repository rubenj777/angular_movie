import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MovieService } from '../movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-creation',
  templateUrl: './movie-creation.component.html',
  styleUrls: ['./movie-creation.component.scss'],
})
export class MovieCreationComponent implements OnInit {
  name!: string;
  year!: string;
  genres!: string;
  director!: string;
  duration!: string;
  image!: URL;

  constructor(private movieService: MovieService, private router: Router) {}

  ngOnInit(): void {}

  submit(form: NgForm) {
    const name = form.value['name'];
    const year = form.value['year'];
    const genres = form.value['genres'];
    const director = form.value['director'];
    const duration = form.value['duration'];
    const image = form.value['image'];
    this.movieService.addMovie(name, year, genres, director, duration, image);
    this.router.navigate(['movie-list']);
    form.reset();
  }
}
