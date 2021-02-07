import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_ROUTE } from '../../shared/constants/api.routes.constants';

@Injectable()

export class CartService {

  constructor( private http: HttpClient) {}

  public updateStock(id: string, stock: number): Observable<{}> {
    return this.http.patch(API_ROUTE.STOCK(id), {stock});
  }
}
