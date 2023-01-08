import { FormBuilder } from '@angular/forms';
import { LocalService } from 'src/app/shared/services/local.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-category-product-card',
  templateUrl: './category-product-card.component.html',
  styleUrls: ['./category-product-card.component.css'],
})
export class CategoryProductCardComponent {
  @Input() product: any;
  isInCart: boolean = false;
  productForm;
  constructor(
    private localService: LocalService,
    private formBuilder: FormBuilder
  ) {
    this.productForm = this.formBuilder.group({
      productId: [],
      orderedQuantity: [],
    });
  }

  ngOnInit(): void {
    console.log(this.product);
    this.isInCart = this.localService.checkIfProductInCart(this.product.id);
  }

  addToCart() {
    this.localService.cartData('cart', {
      ...this.product,
      ...this.productForm.value,
      productId: this.product.id,
    });
    this.isInCart = !this.isInCart;
  }
}
