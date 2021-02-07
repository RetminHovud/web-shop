import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CartProduct } from '../../../model/interface/cart-product.model';
import { MenuItem } from '../../../model/interface/menuItem.model';
import { MENU_ITEMS } from '../../../shared/constants/menu.constants';
import { LocalStorageService } from '../../../shared/services/local-storage/local-storage.service';

@Component({
  selector: 'store-app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})

export class MainLayoutComponent implements OnInit, OnDestroy {
  public productList: CartProduct[] = [];
  public hiddenCart = false;
  public list: MenuItem[] = MENU_ITEMS;
  private userDataSubscription: Subscription = new Subscription;
  
  constructor(private router: Router, private localStorageService: LocalStorageService) {
    this.productList = JSON.parse(this.localStorageService.getItem('cart')) ? JSON.parse(this.localStorageService.getItem('cart')) : [];
   }

  ngOnInit(): void {
    this.userDataSubscription = this.localStorageService.userData$.subscribe(
      (productList: any): void => {
        this.productList = productList;
    });
  }

  public navigate(url: string, data?: unknown): void {
    this.router.navigateByUrl(`/${url}`);
  }
  
  public toggleCart(): void {
    if (this.isEmpty()) {
      this.hiddenCart = true;
      return;
    }
    this.hiddenCart = !this.hiddenCart;
  }
  
  public isEmpty(): boolean {
    return !this.productList.length;
  }

  ngOnDestroy(): void {
    this.userDataSubscription.unsubscribe();
  }
}
