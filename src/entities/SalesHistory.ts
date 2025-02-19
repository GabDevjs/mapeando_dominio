export class SalesHistory {
  productId: string;
  quantitySold: number;
  saleDate: Date;
  profit: number;

  constructor(productId: string, quantitySold: number, saleDate: Date, profit: number) {
    this.productId = productId;
    this.quantitySold = quantitySold;
    this.saleDate = saleDate;
    this.profit = profit;
  }
}
