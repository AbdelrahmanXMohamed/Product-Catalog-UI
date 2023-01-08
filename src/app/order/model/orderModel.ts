
export interface orderResponse
{
    orderId:number,
    totalPrice:number,
    customerName:string,
    customerMail:string,
    products:orderedProduct[]
}
export interface orderedProduct
{
    id:number,
    nameEn:string,
    nameAr:string,
    price:number,
    orderedQuantity:number,
    image:string
}
export interface orderRequest
{
    orderItems:OrderedProductRequest[]
}

export interface OrderedProductRequest extends orderedProduct
{
    productId:number,
    orderedQuantity:number
}
