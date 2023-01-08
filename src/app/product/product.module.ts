// import { ProductDetailsPageComponent } from './components/product-details-page/product-details-page.component';
import { SharedModule } from './../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductPageComponent } from './components/product-page/product-page.component';
import { CreateProductPageComponent } from './components/create-product-page/create-product-page.component';
import { ProductDetailsUpdatePageComponent } from './components/product-details-update-page/product-details-update-page.component';
import { ProductDetailsPageComponent } from './components/product-details-page/product-details-page.component';

const appRoutes = [
  { path: '', component: ProductPageComponent },
  { path: 'create', component: CreateProductPageComponent },
  { path: ':id', component: ProductDetailsPageComponent },
  { path: 'edit/:id', component: ProductDetailsUpdatePageComponent },
];

@NgModule({
  declarations: [
    ProductCardComponent,
    ProductPageComponent,
    CreateProductPageComponent,
    ProductDetailsUpdatePageComponent,
    ProductDetailsPageComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild(appRoutes),
  ],
})
export class ProductModule {}
