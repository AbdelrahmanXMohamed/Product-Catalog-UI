import { SharedModule } from './../shared/shared.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderPageComponent } from './components/order-page/order-page.component';
import { OrderCardComponent } from './components/order-card/order-card.component';
import { OrderDetailsPageComponent } from './components/order-details-page/order-details-page.component';


const appRoutes=[
  {path:'',component:OrderPageComponent},
  {path:':id',component:OrderDetailsPageComponent}
  ]


@NgModule({
  declarations: [
    OrderPageComponent,
    OrderCardComponent,
    OrderDetailsPageComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(appRoutes),SharedModule
  ]
})
export class OrderModule { }
