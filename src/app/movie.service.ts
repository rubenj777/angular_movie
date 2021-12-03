import { Injectable } from '@angular/core';
import { Movie } from './models/movie';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  public tabMovie: Movie[] = [];

  constructor() {
    let fullMetalJacket = new Movie(
      'Full Metal Jacket',
      '1987',
      ['War'],
      'Stanley Kubrick',
      116,
      new URL(
        'https://fr.web.img5.acsta.net/medias/nmedia/18/65/57/12/19254508.jpg'
      )
    );
    let shining = new Movie(
      'Shining',
      '1980',
      ['Horror', 'Snow'],
      'Stanley Kubrick',
      119,
      new URL('https://m.media-amazon.com/images/I/51Ofa1gRbmL._AC_.jpg')
    );
    let spaceOdyssey = new Movie(
      '2001 : A Space Odyssey',
      '1968',
      ['SF'],
      'Stanley Kubrick',
      156,
      new URL(
        'https://m.media-amazon.com/images/M/MV5BMmNlYzRiNDctZWNhMi00MzI4LThkZTctMTUzMmZkMmFmNThmXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg'
      )
    );
    this.tabMovie.push(fullMetalJacket, shining, spaceOdyssey);
  }

  addMovie(
    name: string,
    year: string,
    genres: string[],
    director: string,
    duration: number,
    img: URL
  ) {
    const movieObject = {
      name,
      year,
      genres,
      director,
      duration,
      img,
    };
    movieObject.name = name;
    movieObject.year = year;
    movieObject.genres = genres;
    movieObject.director = director;
    movieObject.duration = duration;
    movieObject.img = img;
    this.tabMovie.push(movieObject);
  }
}
