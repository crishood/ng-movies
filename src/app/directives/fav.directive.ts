import {
  Directive,
  HostBinding,
  HostListener,
  inject,
  input,
} from '@angular/core';
import { Movie } from '../model/movie.model';
import { FavoritesService } from '../services/favorites.service';

@Directive({
  selector: '[appFav]',
  standalone: true,
})
export class FavDirective {
  movie = input.required<Movie>({ alias: 'appFav' });

  private _favoritesService = inject(FavoritesService);

  @HostBinding('class.active')
  get isActive() {
    return this._favoritesService.isFavorite(this.movie())();
  }

  @HostListener('click')
  onClick() {
    this._favoritesService.toggleFavorite(this.movie());
  }
}
