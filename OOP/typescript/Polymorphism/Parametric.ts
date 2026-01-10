class ShoppingCart<T> {
  private items: T[] = [];

  addItem(item: T) {
    this.items.push(item);
  }

  getItems(): T[] {
    return this.items;
  }
}

// Cart for numbers (product IDs)
const idCart = new ShoppingCart<number>();
idCart.addItem(101);
idCart.addItem(102);

// Cart for strings (product names)
const nameCart = new ShoppingCart<string>();
nameCart.addItem("Laptop");
nameCart.addItem("Phone");

console.log(idCart.getItems());   // [101, 102]
console.log(nameCart.getItems()); // ["Laptop", "Phone"]
