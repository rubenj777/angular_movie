export class Movie {
  public id: string;
  public name: string;
  public year: string;
  public newGenre: string;
  public listGenres: string[] = [];
  public director: string;
  public duration: string;
  public img: URL;

  constructor(
    aId: string,
    aName: string,
    aYear: string,
    aNewGenre: string,
    aDirector: string,
    aDuration: string,
    aImg: URL
  ) {
    this.id = aId;
    this.name = aName;
    this.year = aYear;
    this.newGenre = aNewGenre;
    this.director = aDirector;
    this.duration = aDuration;
    this.img = aImg;
  }
}
