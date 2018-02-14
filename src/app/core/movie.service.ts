import { Injectable } from '@angular/core';
import { MOVIES } from '../mock';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class MovieService {

  constructor() { }

  getMovies() {
    return Observable.of(MOVIES);
  }

}
