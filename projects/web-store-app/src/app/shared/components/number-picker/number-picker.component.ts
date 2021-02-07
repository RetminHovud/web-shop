import { EventEmitter } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'store-app-number-picker',
  templateUrl: './number-picker.component.html',
  styleUrls: ['./number-picker.component.scss']
})
export class NumberPickerComponent implements OnInit {
  @Input()
  quantity!: number;
  @Input()
  stock!: number;

  @Output()
  incress: EventEmitter<any> = new EventEmitter();
  @Output()
  decrease: EventEmitter<any> = new EventEmitter();

  constructor() { }
  
  ngOnInit(): void {
  }

  public deleteProduct(): void {
    if (this.quantity > 0) {
      this.decrease.emit(this.quantity - 1);
      this.quantity -= 1;
    } 
  }

  public addProduct(): void {
    if (this.quantity < this.stock) {
      this.incress.emit(this.quantity + 1);
      this.quantity += 1;
    } 
    
  }

}
