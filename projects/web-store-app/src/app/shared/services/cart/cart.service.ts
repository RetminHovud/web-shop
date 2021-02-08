import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_ROUTE } from '../../constants/api.routes.constants';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CartService {

  constructor( private http: HttpClient) {}

  public updateStock(id: string, stock: number): Observable<{}> {
    return this.http.patch(API_ROUTE.STOCK(id), {stock});
  }
}
