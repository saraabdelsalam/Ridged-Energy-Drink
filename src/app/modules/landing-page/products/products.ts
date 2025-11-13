import { Component } from '@angular/core';
import { ProductsService } from '../../../shared/Services/products.service';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-products',
  imports: [CarouselModule],
  templateUrl: './products.html',
  styleUrl: './products.scss',
})
export class Products {
  private productsService: ProductsService;
  constructor(
    productsService: ProductsService) {
      this.productsService = productsService;
  }

  getProducts() { 
    console.log('Fetching products...', this.productsService.getProducts());
    return this.productsService.getProducts();
  }
}