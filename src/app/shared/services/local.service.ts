import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalService {
  constructor() {}
  public saveData(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  public cartData(key: string, value: any) {
    let data: any;
    if (!this.getData(key)) {
      this.saveData(key, '{"orderItems":[]}');
    }
    data = JSON.parse(this.getData(key));
    let new_data = data.orderItems.filter(
      (element: any) => element.productId !== value.productId
    );
    if (new_data.length == data.orderItems.length) {
      data.orderItems.push(value);
      this.saveData(key, JSON.stringify(data));
    } else {
      data.orderItems = new_data;
      this.saveData(key, JSON.stringify(data));
    }
  }
  public checkIfProductInCart(id: number): boolean {
    if (this.getData('cart')) {
      let data = JSON.parse(this.getData('cart'));
      return data.orderItems.some((element: any) => element.productId === id);
    }
    return false;
  }

  public getData(key: string): any {
    return localStorage.getItem(key);
  }

  public removeData(key: string) {
    localStorage.removeItem(key);
  }

  public clearData() {
    localStorage.clear();
  }
}
