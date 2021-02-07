import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from '../../../model/interface/product.model';
import { LocalStorageService } from '../../services/local-storage/local-storage.service';

@Component({
  selector: 'store-app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnDestroy {
  @Input()
  type!: string;
  
  public productList: Product[] = [];
  public totalAmount = 0;

  private userDataSubscription: Subscription = new Subscription;
  
  constructor(private localStorageService: LocalStorageService) {
    this.productList = JSON.parse(this.localStorageService.getItem('cart')) ? JSON.parse(this.localStorageService.getItem('cart')) : [];
    this.updateTotalAmount();
  }

  ngOnInit(): void {
    this.userDataSubscription = this.localStorageService.userData$.subscribe(
      (productList: any): void => {
        this.productList = productList;
        this.updateTotalAmount();
    });
   }

  public updateQuantity(event: number, product: Product): void {
    this.productList[this.productList.indexOf(product)].quantity = event; 
    this.updateTotalAmount();
    this.localStorageService.updateItem('cart', this.productList);
  }

  private updateTotalAmount(): void {
    this.totalAmount = 0;
    const productList = this.productList;
    for (let i = 0, len = productList.length; i < len; i++) {
      this.totalAmount += productList[i].price * productList[i].quantity;

      if (productList[i].quantity === 0) {
        productList.splice(i, 1);
      }
    }
  }

  public isEmpty(): boolean {
    return !this.productList.length;
  }

  ngOnDestroy(): void {
    this.userDataSubscription.unsubscribe();
  }

}
