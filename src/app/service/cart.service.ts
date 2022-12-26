import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  getProduct() {
    throw new Error('Method not implemented.');
  }
  public cartItemsList: any = [];
  public productList = new BehaviorSubject<any>([]);

  constructor() {}

 

  setProduct(product: any) {
    this.cartItemsList.push(...product);
    this.productList.next(product);
  } 

  addToCart(product: any) {
    this.cartItemsList.push(product);
    this.productList.next(this.cartItemsList);
    this.getTotalPrice();
    console.log(this.cartItemsList);
  }

  getTotalPrice() : number{
    let grandTotal = 0;
    this.cartItemsList.map((a: any) => {
      grandTotal += a.total;
    });
    return grandTotal
  }
  removeCartItems(product: any) {
    this.cartItemsList.map((a: any, index: any) => {
      if (product.id === a.id) {
        this.cartItemsList.splice(index, 1);
      }
      this.productList.next(this.cartItemsList)
    });
    
  }

  removeAllCart() {
    this.cartItemsList = [];
    this.productList.next(this.cartItemsList);
  }
}
