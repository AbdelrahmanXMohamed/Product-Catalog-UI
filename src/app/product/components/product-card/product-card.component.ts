import { LocalService } from 'src/app/shared/services/local.service';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent implements OnInit {
  @Input() product: any;
  @Output() deleteProductEvent = new EventEmitter<number>();

  isInCart: boolean = false;
  productForm;
  constructor(
    private localService: LocalService,
    private formBuilder: FormBuilder
  ) {
    this.productForm = this.formBuilder.group({
      productId: [1],
      orderedQuantity: [1],
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
  deleteProduct() {
    this.deleteProductEvent.emit(this.product.id);
  }
}
