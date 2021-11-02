import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [
    new Product({ id: 1, name: 'Product 1', description: 'This is the product 1 description. The product is really cool', price: 1200 }),
    new Product({ id: 2, name: 'Product ', description: 'This is the product 1 description. The product is really cool', price: 1000 }),
    new Product({ id: 3, name: 'Product 3', description: 'This is the product 1 description. The product is really cool', price: 1300 }),
    new Product({ id: 4, name: 'Product 4', description: 'This is the product 1 description. The product is really cool', price: 1500 }),
    new Product({ id: 5, name: 'Product 5', description: 'This is the product 1 description. The product is really cool', price: 1100 }),
    new Product({ id: 6, name: 'Product 6', description: 'This is the product 1 description. The product is really cool', price: 1000 }),
  ]
 
  constructor() { }

  getProducts(): Product[] {
    return this.products
  }
}
