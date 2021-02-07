import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../../model/interface/product.model';
import { API_ROUTE } from '../../shared/constants/api.routes.constants';

@Injectable()

export class FavoritesService {

  constructor( private http: HttpClient) {}

  public getFavorites(): Observable<Product[]> {
    return this.http.get<Product[]>(API_ROUTE.FAVORITES);
  }

  public updateFavorite(id: string, favorite: boolean): Observable<{}> {
    return this.http.patch(API_ROUTE.STOCK(id), {favorite});
  }
}
