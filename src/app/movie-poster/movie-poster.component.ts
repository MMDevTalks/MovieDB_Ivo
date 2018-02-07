import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'mm-movie-poster',
  templateUrl: './movie-poster.component.html',
  styleUrls: ['./movie-poster.component.scss']
})

export class MoviePosterComponent implements OnInit {
  @Input() movie: any = {};
  @Output() selectMovie: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  clickMoviePoster($event, movie) {
    this.selectMovie.emit(movie);
  }

}
