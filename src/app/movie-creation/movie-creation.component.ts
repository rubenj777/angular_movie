import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MovieService } from '../movie.service';
import { Movie } from '../models/movie';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-movie-creation',
  templateUrl: './movie-creation.component.html',
  styleUrls: ['./movie-creation.component.scss'],
})
export class MovieCreationComponent implements OnInit {
  public name!: string;
  public year!: number;
  public newGenre!: string;
  public listGenres: string[] = [];
  public director!: string;
  public duration!: number;
  public image!: URL;
  public editMode = false;
  public editedMovie: Movie;

  constructor(
    private singletonMovie: MovieService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    let id = route.snapshot.paramMap.get('id');

    this.editedMovie = this.singletonMovie.tabMovie.find((f) => f.id === id)!;

    if (this.editedMovie) {
      this.name = this.editedMovie.name;
      this.year = this.editedMovie.year;
      this.listGenres = this.editedMovie.genres;
      this.director = this.editedMovie.director;
      this.duration = this.editedMovie.duration;
      this.image = this.editedMovie.img;
      this.editMode = true;
    }
  }

  ngOnInit(): void {}

  submit(form: NgForm) {
    this.router.navigate(['movie-list']);
    if (!this.editMode) {
      this.createMovie();
    } else {
      this.edit();
    }

    this.flushGenres();
    form.reset();
  }

  createMovie() {
    let newMovie = new Movie(
      this.name + Math.random(),
      this.name,
      this.year,
      [...this.listGenres],
      this.director,
      this.duration,
      this.image
    );
    this.singletonMovie.tabMovie.push(newMovie);
  }

  edit() {
    this.editedMovie.name = this.name;
    this.editedMovie.year = this.year;
    this.editedMovie.genres = [...this.listGenres];
    this.editedMovie.director = this.director;
    this.editedMovie.duration = this.duration;
    this.editedMovie.img = this.image;
  }

  addGenre() {
    console.log(this.listGenres);
    this.listGenres.push(this.newGenre);
  }

  flushGenres() {
    this.listGenres.splice(0);
  }
}
