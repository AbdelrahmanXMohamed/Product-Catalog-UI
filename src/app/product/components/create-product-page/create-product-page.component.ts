import { ProductsService } from './../../services/products.service';
import { Category } from './../../../category/model/categoryModel';
import { CategoryService } from './../../../category/services/category.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-product-page',
  templateUrl: './create-product-page.component.html',
  styleUrls: ['./create-product-page.component.css'],
})
export class CreateProductPageComponent implements OnInit {
  categories: Category[] = [];
  imageData: string = '';
  productForm;
  constructor(
    private formBuilder: FormBuilder,
    private categoryService: CategoryService,
    private productsServices: ProductsService
  ) {
    this.productForm = this.formBuilder.group({
      nameEn: [''],
      nameAr: [''],
      price: [, [Validators.required, Validators.min(1)]],
      quantity: [, [Validators.required, Validators.min(1)]],
      orderedLimit: [, [Validators.required, Validators.min(1)]],
      categoryId: [],
      image: [''],
    });
  }

  ngOnInit(): void {
    this.categoryService.getCategory().subscribe(
      (res) => {
        this.categories = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  uploadFile(fileInput: any) {
    // console.log(fileInput.target.files[0])
    if (fileInput.target.files && fileInput.target.files[0]) {
      const max_size = 20971520;
      const allowed_types = ['image/png', 'image/jpeg'];
      const max_height = 15200;
      const max_width = 25600;

      // if (fileInput.target.files[0].size > max_size) {
      //     // this.imageError =
      //     //     'Maximum size allowed is ' + max_size / 1000 + 'Mb';

      //     return false;
      // }

      // if (!_.includes(allowed_types, fileInput.target.files[0].type)) {
      //     // this.imageError = 'Only Images are allowed ( JPG | PNG )';
      //     return false;
      // }
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const image = new Image();
        image.src = e.target.result;
        image.onload = (rs: any) => {
          const img_height = rs.currentTarget['height'];
          const img_width = rs.currentTarget['width'];
          this.imageData = e.target.result;
          // if (img_height > max_height && img_width > max_width) {
          //     this.imageError =
          //         'Maximum dimentions allowed ' +
          //         max_height +
          //         '*' +
          //         max_width +
          //         'px';
          //     return false;
          // } else {
          //     const imgBase64Path = e.target.result;
          //     this.cardImageBase64 = imgBase64Path;
          //     this.isImageSaved = true;
          //     // this.previewImagePath = imgBase64Path;
          // }
        };
      };

      reader.readAsDataURL(fileInput.target.files[0]);
    }
  }
  createProduct() {
    this.productsServices
      .createProducts({ ...this.productForm.value, image: this.imageData })
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
