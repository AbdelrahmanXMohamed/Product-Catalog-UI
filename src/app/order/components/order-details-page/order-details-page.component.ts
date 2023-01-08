import { orderResponse } from './../../model/orderModel';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from './../../services/order.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-details-page',
  templateUrl: './order-details-page.component.html',
  styleUrls: ['./order-details-page.component.css']
})
export class OrderDetailsPageComponent implements OnInit {
order:any
orderId:number=0

constructor(private orderService:OrderService,private route: ActivatedRoute){
}

ngOnInit(): void {
  this.route.params.subscribe(params=>{
    this.orderId=params['id']
  })
  this.orderService.getOrderDetails(this.orderId).subscribe(
    res=>{
      console.log(res)
      this.order=res
    },err=>
    {
      console.log(err)
    })
}
}
