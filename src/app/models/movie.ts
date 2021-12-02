export class Movie {
  public name: string;
  public year: string;
  public genres: string[];
  public director: string;
  public duration: number;
  public img: URL;

  constructor(
    aName: string,
    aYear: string,
    aGenres: string[],
    aDirector: string,
    aDuration: number,
    aImg: URL
  ) {
    this.name = aName;
    this.year = aYear;
    this.genres = aGenres;
    this.director = aDirector;
    this.duration = aDuration;
    this.img = aImg;
  }
}
