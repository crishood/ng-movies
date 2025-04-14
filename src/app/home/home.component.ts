import { Component, inject } from '@angular/core';
import { HighlightDirective } from '../highlight.directive';
import { MovieItemComponent } from '../movie-item/movie-item.component';
import { Movie } from '../model/movie.model';
import { MoviesService } from '../services/movies.service';
import { FavoritesService } from '../services/favorites.service';
import { Observable } from 'rxjs';
import { AsyncPipe, I18nPluralPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-home',
  imports: [
    HighlightDirective,
    MovieItemComponent,
    AsyncPipe,
    RouterLink,
    I18nPluralPipe,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  private moviesService = inject(MoviesService);
  protected movies$: Observable<Movie[]> = this.moviesService.getMovies();
  protected favoritesService = inject(FavoritesService);

  filter(title: string, year: string) {
    this.movies$ = this.moviesService.filterMovieList(title, year);
  }
}
