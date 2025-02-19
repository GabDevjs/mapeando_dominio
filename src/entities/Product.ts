export class Product {
  id: string;
  name: string;
  size: string;
  color: string;
  stockQuantity: number;
  minStockQuantity: number;

  constructor(id: string, name: string, size: string, color: string, stockQuantity: number, minStockQuantity: number) {
    this.id = id;
    this.name = name;
    this.size = size;
    this.color = color;
    this.stockQuantity = stockQuantity;
    this.minStockQuantity = minStockQuantity;
  }
}
