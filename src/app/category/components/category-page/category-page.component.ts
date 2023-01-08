import { Category } from './../../model/categoryModel';
import { CategoryService } from './../../services/category.service';
import { Component, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.css'],
})
export class CategoryPageComponent implements OnInit {
  categories: Category[] = [];

  constructor(private categoryService: CategoryService) {}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.categoryService.getCategory().subscribe(
      (res) => {
        this.categories = res;
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }
  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
  }
}
