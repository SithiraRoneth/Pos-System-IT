export class OrderModel{
    constructor(order_id,order_date,customer_id,total,discount,cash) {
        this.order_id=order_id;
        this.order_date=order_date;
        this.customer_id=customer_id;
        this.total=total;
        this.discount=discount;
        this.cash=cash;
    }
}