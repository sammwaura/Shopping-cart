import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [
    new Product(1, 'Product 1', 'This is the product 1 description. The product is really cool', 1200),
    new Product(2, 'Product ', 'This is the product 1 description. The product is really cool', 1000),
    new Product(3, 'Product 3', 'This is the product 1 description. The product is really cool', 1300),
    new Product(4, 'Product 4', 'This is the product 1 description. The product is really cool', 1500),
    new Product(5, 'Product 5', 'This is the product 1 description. The product is really cool', 1100),
    new Product(6, 'Product 6', 'This is the product 1 description. The product is really cool', 1000),
  ]
 
  constructor() { }

  getProducts(): Product[] {
    return this.products
  }
}
