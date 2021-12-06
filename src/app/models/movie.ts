export class Movie {
  public id: string;
  public name: string;
  public year: number;
  public genres: string[];
  public director: string;
  public duration: number;
  public img: URL;

  constructor(
    aId: string,
    aName: string,
    aYear: number,
    aGenres: string[],
    aDirector: string,
    aDuration: number,
    aImg: URL
  ) {
    this.id = aId;
    this.name = aName;
    this.year = aYear;
    this.genres = aGenres;
    this.director = aDirector;
    this.duration = aDuration;
    this.img = aImg;
  }
}
