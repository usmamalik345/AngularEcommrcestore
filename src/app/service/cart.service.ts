import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public cartItemsList: any = [];
  public productList = new BehaviorSubject<any>([]);

  constructor() {}

  getProduct() {
    return this.productList.asObservable();
  }

  setProduct(product: any) {
    this.cartItemsList.push(...product);
    this.productList.next(product);
  }

  addToCart(product: any) {
    this.cartItemsList.push(product);
    this.productList.next(this.cartItemsList);
    this.getTotalPrice();
  }

  getTotalPrice() {
    let grandTotal = 0;
    this.cartItemsList.map((a: any) => {
      grandTotal += a.total;
    });
  }
  removeCartItems(product: any ){
    this.cartItemsList.map((a: any, index:any )=>{
      if (product.id === a.id) {
        this.
      }
    })
  }
}
