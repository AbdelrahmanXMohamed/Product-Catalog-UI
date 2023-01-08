import { ActivatedRoute } from '@angular/router';
import { ProductsService } from './../../services/products.service';
import { CategoryService } from './../../../category/services/category.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Category } from './../../../category/model/categoryModel';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product-details-update-page',
  templateUrl: './product-details-update-page.component.html',
  styleUrls: ['./product-details-update-page.component.css'],
})
export class ProductDetailsUpdatePageComponent {
  categories: Category[] = [];
  imageData: string = '';
  productId: number = 0;
  product: any;
  productForm;

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private categoryService: CategoryService,
    private productsServices: ProductsService
  ) {
    this.productForm = this.formBuilder.group({
      nameEn: [''],
      nameAr: [''],
      price: [0, [Validators.required, Validators.min(1)]],
      quantity: [0, [Validators.required, Validators.min(1)]],
      orderedLimit: [0, [Validators.required, Validators.min(1)]],
      categoryId: [0],
      image: [''],
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.productId = params['id'];
    });
    this.categoryService.getCategory().subscribe(
      (res) => {
        this.categories = res;
      },
      (err) => {
        console.log(err);
      }
    );
    this.productsServices
      .getProductsDetails(this.productId)
      .subscribe((res) => {
        this.product = res;
        this.productForm = this.formBuilder.group({
          nameEn: [res.nameEn],
          nameAr: [res.nameAr],
          price: [res.price, [Validators.required, Validators.min(1)]],
          quantity: [res.quantity, [Validators.required, Validators.min(1)]],
          orderedLimit: [
            res.orderedLimit,
            [Validators.required, Validators.min(1)],
          ],
          categoryId: [res.category.id],
          image: [''],
        });
      });
  }

  uploadFile(fileInput: any) {
    if (fileInput.target.files && fileInput.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const image = new Image();
        image.src = e.target.result;
        image.onload = (rs: any) => {
          this.imageData = e.target.result;
        };
      };

      reader.readAsDataURL(fileInput.target.files[0]);
    }
  }
  updateProduct() {
    console.log(this.productForm.valid);
    console.log(this.productForm.get('image')?.errors);
    if (this.productForm.valid) {
      if (this.imageData.length) {
        this.productsServices
          .updateProduct(this.productId, {
            ...this.productForm.value,
            image: this.imageData,
          })
          .subscribe(
            (res) => {
              console.log(res);
            },
            (err) => {
              console.log(err);
            }
          );
      } else {
        this.productsServices
          .updateProduct(this.productId, {
            ...this.productForm.value,
            image: this.product.image,
          })
          .subscribe(
            (res) => {
              console.log(res);
            },
            (err) => {
              console.log(err);
            }
          );
      }
    }
  }
}
