import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

import { ShoppingCartRoutingModule } from './shopping-cart-routing.module';
import { ShoppingCartComponent } from './shopping-cart.component';


@NgModule({
  declarations: [ShoppingCartComponent],
  imports: [
    SharedModule,
    ShoppingCartRoutingModule
  ]
})
export class ShoppingCartModule { }
