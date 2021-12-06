import { Injectable } from '@angular/core';
import { Movie } from './models/movie';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  public tabMovie: Movie[] = [];

  constructor() {
    let fullMetalJacket = new Movie(
      '1651',
      'Full Metal Jacket',
      1987,
      ['War'],
      'Stanley Kubrick',
      116,
      new URL(
        'https://fr.web.img5.acsta.net/medias/nmedia/18/65/57/12/19254508.jpg'
      )
    );
    let shining = new Movie(
      '1658',
      'Shining',
      1980,
      ['Horror'],
      'Stanley Kubrick',
      119,
      new URL('https://m.media-amazon.com/images/I/51Ofa1gRbmL._AC_.jpg')
    );
    let spaceOdyssey = new Movie(
      '956',
      '2001 : A Space Odyssey',
      1968,
      ['SF'],
      'Stanley Kubrick',
      156,
      new URL(
        'https://m.media-amazon.com/images/M/MV5BMmNlYzRiNDctZWNhMi00MzI4LThkZTctMTUzMmZkMmFmNThmXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg'
      )
    );
    this.tabMovie.push(fullMetalJacket, shining, spaceOdyssey);
  }
}
