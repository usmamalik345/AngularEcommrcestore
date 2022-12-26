import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public cartCount: number = 0

  constructor(private cartService : CartService, private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getProduct().subscribe( (res: any ) =>{
     this.cartCount = res.length
    }) 
   

  }

}
