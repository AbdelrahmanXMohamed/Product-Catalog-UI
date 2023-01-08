import { CategoryService } from './../../services/category.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category-product-page',
  templateUrl: './category-product-page.component.html',
  styleUrls: ['./category-product-page.component.css'],
})
export class CategoryProductPageComponent implements OnInit {
  products: any[] = [];
  categoryId: number = 0;
  constructor(
    private route: ActivatedRoute,
    private categoryServices: CategoryService
  ) {}
  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.categoryId = params['id'];
    });
    this.categoryServices.getProductByCategoryId(this.categoryId).subscribe(
      (res) => {
        this.products = res;
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
