import { Component } from '@angular/core';
import { MOVIES } from './mock';

@Component({
  selector: 'mm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  movies = MOVIES;
  selectMovie(movie) {
    alert(movie.id + 'was selected!');
  }
}

