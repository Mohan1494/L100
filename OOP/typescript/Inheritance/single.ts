// Parent Class
class Product {
  constructor(
    public skuID: string,
    public price: number,
    public manufacturer: string
  ) {}

  displayProduct() {
    console.log(`SKU: ${this.skuID}`);
    console.log(`Price: ${this.price}`);
    console.log(`Manufacturer: ${this.manufacturer}`);
  }
}

// Child Class
class PerishableProduct extends Product {
  constructor(
    skuID: string,
    price: number,
    manufacturer: string,
    public expirationDate: string,
    public storageTemperature: number
  ) {
    super(skuID, price, manufacturer);
  }

  displayPerishable() {
    this.displayProduct();
    console.log(`Expires On: ${this.expirationDate}`);
    console.log(`Storage Temp: ${this.storageTemperature}°C`);
  }
}

const milk = new PerishableProduct("SKU123", 50, "DairyCo", "2026-01-01", 4);
milk.displayPerishable();
