import { Category } from './../../category/model/categoryModel';
export interface Product {
  id: number;
  nameEn: string;
  nameAr: string;
  price: number;
  quantity: number;
  image: string;
  orderedLimit: number;
  category: Category;
}
