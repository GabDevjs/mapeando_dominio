export class PurchaseOrder {
  orderId: string;
  productId: string;
  quantity: number;
  orderDate: Date;
  status: string;

  constructor(orderId: string, productId: string, quantity: number, orderDate: Date, status: string) {
    this.orderId = orderId;
    this.productId = productId;
    this.quantity = quantity;
    this.orderDate = orderDate;
    this.status = status;
  }
}
