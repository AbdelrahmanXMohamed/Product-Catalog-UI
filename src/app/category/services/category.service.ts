import { Category } from './../model/categoryModel';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private http: HttpClient) {}

  getCategory(): Observable<Category[]> {
    return this.http.get<Category[]>('http://localhost:8080/category');
  }

  createCategory(name: string) {
    return this.http.post('http://localhost:8080/category', { name: name });
  }

  getProductByCategoryId(id: number): Observable<any[]> {
    return this.http.get<any[]>(`http://localhost:8080/category/${id}`);
  }
}
