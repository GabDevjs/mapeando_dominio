export class Supplier {
  supplierId: string;
  name: string;
  contactInfo: string;
  deliveryTimes: string;

  constructor(supplierId: string, name: string, contactInfo: string, deliveryTimes: string) {
    this.supplierId = supplierId;
    this.name = name;
    this.contactInfo = contactInfo;
    this.deliveryTimes = deliveryTimes;
  }
}
