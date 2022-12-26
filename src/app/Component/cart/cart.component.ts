import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  public products: any = [];
  public grandTotal!: number;

  constructor(private cartService: CartService,private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getProduct().subscribe((res) => {
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();
    });
  }
  removeItems(item: any) {
    this.cartService.removeCartItems(item);
    console.log('click');
  }
  emptyService() {
    this.cartService.removeAllCart();
  }
}
