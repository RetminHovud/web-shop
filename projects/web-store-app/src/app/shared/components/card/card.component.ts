import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../../model/interface/product.model';
import { FavoritesService } from '../../../services/favorites/favorites.service';
import { LocalStorageService } from '../../services/local-storage/local-storage.service';

@Component({
  selector: 'store-app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent implements OnInit {
  @Input() productList!: Product[];
  public cartList: Product[] = [];

  constructor(private localStorageService: LocalStorageService ) { 
    this.cartList = JSON.parse(this.localStorageService.getItem('cart')) ? JSON.parse(this.localStorageService.getItem('cart')) : [];
  }

  ngOnInit(): void {}

  public addProduct(product: Product): void {
    const isNewProduct = !this.cartList.find(element => element === product);
    if (isNewProduct){
      product.quantity = 1;
      this.cartList.push(product);
    } else {
      this.stackProducts(product);
    }
    this.localStorageService.updateItem('cart', this.cartList);
  }

  public swapFavorite(product: Product): void {
    // ToDo update favorite list
    console.log('Update favorite list');
    // this.favoritesService.updateFavorite(product.id, !JSON.parse(product.favorite));
  }

  private stackProducts(cartProduct: Product): void {
    for (let i = 0, len = this.cartList.length; i <= len; i++ ) {
      const product = this.cartList[i];
      
      if (product && product.id === cartProduct.id) {
        product.quantity = this.cartList[i].quantity + 1;
      }
    }
  }

}
