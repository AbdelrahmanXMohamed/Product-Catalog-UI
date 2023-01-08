import { OrderedProductRequest,orderResponse } from './../../model/orderModel';
import { OrderService } from './../../services/order.service';
import { LocalService } from 'src/app/shared/services/local.service';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.css']
})
export class OrderPageComponent implements OnInit {
  orders:OrderedProductRequest[]=[]
  message:string=""
  previousOrders:orderResponse[]=[]
  totalPrice:number=0
  constructor(private localService:LocalService,private orderService:OrderService){}

  ngOnInit(): void {

    this.orders=JSON.parse(this.localService.getData("cart"))?.orderItems
    this.totalPrice=this.orders?.reduce((acc,x)=>acc+x.price*x.orderedQuantity,0)
    this.orderService.getAllOrders()
    .subscribe(res=>
    {
      this.previousOrders=res
    },err=> console.log(err)
    )
    console.log(this.previousOrders)
  }

  createOrder()
  {
    this.orderService.createOrder({"orderItems":this.orders}).subscribe(res=>{
      this.localService.removeData('cart')
      this.orders=[]
      this.orderService.getAllOrders().subscribe(res=>{this.previousOrders=res},err=>console.log(err))
    },(err:any)=>
      {console.log(err)
        if ( !err.error && err.status===403 && err.name==="HttpErrorResponse")
        {
          this.localService.removeData("token")
        }
        else{this.message=err.error.message}
      })
  }
}
