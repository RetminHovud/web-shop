import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { CardComponent } from './components/card/card.component';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { NumberPickerComponent } from './components/number-picker/number-picker.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { CartComponent } from './components/cart/cart.component';
import { CartService } from './services/cart/cart.service';

@NgModule({
  declarations: [ CartComponent, CardComponent, NumberPickerComponent],
  imports: [
    CommonModule, 
    RouterModule,
    FormsModule,

    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatInputModule,
    MatDividerModule,
  ],
  exports: [
    CommonModule,
    RouterModule,
    
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatInputModule,
    MatDividerModule,
    
    CardComponent,
    CartComponent,
    NumberPickerComponent
  ],
  providers: [CartService]
})
export class SharedModule { }
