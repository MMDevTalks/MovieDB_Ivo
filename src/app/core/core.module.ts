import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MoviePosterComponent } from '../movie-poster/movie-poster.component';
import { MovieService } from './movie.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HeaderComponent, MoviePosterComponent],
  exports: [HeaderComponent, MoviePosterComponent],
  providers: [MovieService]
})
export class CoreModule { }
