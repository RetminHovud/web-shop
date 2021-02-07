import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from '../../model/interface/product.model';
import { LocalStorageService } from '../../shared/services/local-storage/local-storage.service';

@Component({
  selector: 'store-app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})

export class ShoppingCartComponent implements OnInit, OnDestroy {
  public productList: Product[] = [];
  private userDataSubscription: Subscription = new Subscription;

  constructor(private localStorageService: LocalStorageService) {
    this.productList = JSON.parse(this.localStorageService.getItem('cart')) ? JSON.parse(this.localStorageService.getItem('cart')) : []; 
  }

  ngOnInit(): void {
    this.userDataSubscription = this.localStorageService.userData$.subscribe(
      (productList: any): void => {
        this.productList = productList;
    });
  }

  ngOnDestroy(): void {
    this.userDataSubscription.unsubscribe();
  }

}
