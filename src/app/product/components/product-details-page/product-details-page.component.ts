import { ProductsService } from './../../services/products.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-details-page',
  templateUrl: './product-details-page.component.html',
  styleUrls: ['./product-details-page.component.css'],
})
export class ProductDetailsPageComponent implements OnInit {
  productId: number = 1;
  product: any = { id: 1 };
  constructor(
    private activatedRoute: ActivatedRoute,
    private productsService: ProductsService
  ) {}
  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.productId = params['id'];
    });
    this.productsService.getProductsDetails(this.productId).subscribe(
      (res) => {
        this.product = res;
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
