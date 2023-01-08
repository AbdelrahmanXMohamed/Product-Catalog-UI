import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}
  getProducts(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:8080/product');
  }
  createProducts(product: any) {
    return this.http.post('http://localhost:8080/product', product);
  }

  getProductsDetails(id: number): Observable<any> {
    return this.http.get<any>('http://localhost:8080/product/' + id);
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.delete<any>('http://localhost:8080/product/' + id);
  }
  updateProduct(id: number, newdate: any): Observable<any> {
    return this.http.put('http://localhost:8080/product/' + id, newdate);
  }
}
