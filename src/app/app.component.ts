import { Component } from '@angular/core';
import { MOVIES } from './mock';
import { Observable } from 'rxjs/Observable';
import { MovieService } from './core/movie.service';

@Component({
  selector: 'mm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public movies$: Observable<Array<any>>;
  public selectedMovie: any;
  public movieDetails: any;
  constructor(private _movieService: MovieService) { }
  movies = MOVIES;
  selectMovie(movie) {
    this.selectedMovie = movie;
  }
  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this.movies$ = this._movieService.getMovies();
  }
}

