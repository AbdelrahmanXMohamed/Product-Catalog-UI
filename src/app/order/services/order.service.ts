import { Observable } from 'rxjs';
import { LocalService } from 'src/app/shared/services/local.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { orderRequest } from '../model/orderModel';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http:HttpClient,private localService:LocalService) {}

  getAllOrders():Observable<any[]>
  {
    let headers=new HttpHeaders()
    .set("Authorization","Bearer "+this.localService.getData("token"))
    .set('content-type','application/json')
    .set('Access-Control-Allow-Origin', '*')
    return this.http.get<any[]>("http://localhost:8080/order",{headers})
  }
  createOrder(order:orderRequest)
  {
    let headers=new HttpHeaders()
    .set("Authorization","Bearer "+this.localService.getData("token"))
    .set('content-type','application/json')
    .set('Access-Control-Allow-Origin', '*')
    return this.http.post("http://localhost:8080/order/",order,{headers})
  }
  getOrderDetails(id:number)
    {
    let headers=new HttpHeaders()
    .set("Authorization","Bearer "+this.localService.getData("token"))
    .set('content-type','application/json')
    .set('Access-Control-Allow-Origin', '*')
    return this.http.get("http://localhost:8080/order/"+id,{headers})
  }
}
