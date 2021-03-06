import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems = [
    // {id: 1, productId: 1, productName: 'Utd Kit', qty: 4, price: 1200 },
    // {id: 2, productId: 2, productName: 'Chels Kit', qty: 5, price: 1100 },
    // {id: 3, productId: 3, productName: 'Arsenal Kit', qty: 3, price: 1000 },
    // {id: 4, productId: 4, productName: 'Barca Kit', qty: 2, price: 1600 },
  ];

  cartTotal = 0

  constructor(private msg: MessengerService) { }

  ngOnInit() {

    this.msg.getMsg().subscribe((product:Product | any) => {
      this.addProductToCart(product)
    })
  }

  addProductToCart(product:Product){
    this.cartItems.push({
      productName: product.name,
      qty: 1,
      price: product.price
    })

    this.cartTotal =0
    this.cartItems.forEach(item => {
      this.cartTotal += (item.qty * item.price)
    })

  }
}

