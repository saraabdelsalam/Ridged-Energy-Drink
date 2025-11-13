import { Injectable } from "@angular/core";
import { Product } from "./models/product.model";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
products: Product[] = [
    {
      id: 1,
      name: 'Ridged Original',
     price: 2.99,
     description: 'Classic ridged original energy drink.',
     imageUrl:'assets/images/products/Ridged-Original.png'
    },
    {
        id: 2,
        name: 'Ridged Tropical Burst',
       price: 2.99,
       description: 'Exotic, Bright, Tangy tropical flavors.',
       imageUrl:'assets/images/products/Tropical-Brust.png'
      },
    {
        id: 3,
        name: 'Berry Blast',
       price: 2.99,
       description: 'Rich, Sweet, Mixed Berries.',
       imageUrl:'assets/images/products/Berry-Blast.png'
    },
    {
        id: 4,
        name: 'Citrus Surge',
       price: 2.99,
       description: 'Zesty, Refreshing Citrus flavors.',
       imageUrl:'assets/images/products/Citrus-Surge.png'
    },
    {
        id: 5,
        name: 'Midnight Charge',
       price: 2.99,
       description: 'Bold, Dark, Intense energy blend.',
       imageUrl:'assets/images/products/Midnight-Charge.png'
    }
];

getProducts(): Product[] {
    return this.products;
  }
}