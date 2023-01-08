import { CategoryService } from './../../services/category.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-create-category-page',
  templateUrl: './create-category-page.component.html',
  styleUrls: ['./create-category-page.component.css'],
})
export class CreateCategoryPageComponent {
  category: string = '';
  message: string = '';
  error: boolean = false;
  color: string = '';
  constructor(private categoryService: CategoryService) {}

  createCategory() {
    if (this.category.length) {
      this.categoryService.createCategory(this.category).subscribe(
        (res) => {
          console.log(res);
          this.message = 'Created successfully';
          this.color = '#24f16178';
        },
        (err) => {
          console.log(err);
          this.message = err.error.message;
          this.color = 'red';
        }
      );
    } else {
      this.message = "Can't be empty";
      this.color = 'red';
    }
  }
}
