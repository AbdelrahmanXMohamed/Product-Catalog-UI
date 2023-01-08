import { ProductsService } from './../../services/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css'],
})
export class ProductPageComponent implements OnInit {
  products: any[] = [];

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.productsService.getProducts().subscribe(
      (res) => {
        this.products = res;
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  deleteProduct(id: number) {
    this.productsService.deleteProduct(id).subscribe(
      (res) => {
        this.products = this.products.filter((e) => e.id != id);
      },
      (err) => {
        console.log(err);
      }
    );
    console.log(id);
  }
}
