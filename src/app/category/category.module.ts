import { SharedModule } from './../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryPageComponent } from './components/category-page/category-page.component';
import { CreateCategoryPageComponent } from './components/create-category-page/create-category-page.component';
import { CategoryCardComponent } from './components/category-card/category-card.component';
import { CategoryProductPageComponent } from './components/category-product-page/category-product-page.component';
import { CategoryProductCardComponent } from './components/category-product-card/category-product-card.component';

const appRoutes: Routes = [
  { path: '', component: CategoryPageComponent },
  { path: 'create', component: CreateCategoryPageComponent },
  { path: ':id', component: CategoryProductPageComponent },
];
@NgModule({
  declarations: [
    CategoryPageComponent,
    CreateCategoryPageComponent,
    CategoryCardComponent,
    CategoryProductPageComponent,
    CategoryProductCardComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes),
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
  ],
})
export class CategoryModule {}
