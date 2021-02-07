import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_ROUTE } from '../../shared/constants/api.routes.constants';
import { Product } from '../../model/interface/product.model';
import { Observable } from 'rxjs';

@Injectable()

export class ProductsService {

  constructor( private http: HttpClient ) { }

  public getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(API_ROUTE.HOME);
  }
}
