import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/interface/product.model';
import { ProductsService } from '../../services/home/home.service';

@Component({
  selector: 'store-app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  productList: Product[] = [];

  public constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsService.getProducts().subscribe((productList): void => {
      this.productList = productList;
    });
  }
}
