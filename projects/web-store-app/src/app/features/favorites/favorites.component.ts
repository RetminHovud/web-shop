import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/interface/product.model';
import { FavoritesService } from '../../services/favorites/favorites.service';

@Component({
  selector: 'store-app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})

export class FavoritesComponent implements OnInit {
  public productList: Product[] = [];

  public constructor(private favoritesService: FavoritesService) { }

  ngOnInit(): void {
    this.favoritesService.getFavorites().subscribe((productList): void => {
      this.productList = productList;
    });
  }
}
