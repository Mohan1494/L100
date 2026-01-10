package Inheritance;
class Product {
    String ID;
    double price;
    String manufacturer;

    Product(String ID, double price, String manufacturer) {
        this.ID = ID;
        this.price = price;
        this.manufacturer = manufacturer;
    }

    void displayProduct() {
        System.out.println("SKU: " + ID);
        System.out.println("Price: " + price);
        System.out.println("Manufacturer: " + manufacturer);
    }
}

// Child Class
class PerishableProduct extends Product {
    String expirationDate;
    double storageTemperature;

    PerishableProduct(String ID, double price, String manufacturer,
                      String expirationDate, double storageTemperature) {
        super(ID, price, manufacturer);
        this.expirationDate = expirationDate;
        this.storageTemperature = storageTemperature;
    }

    void displayPerishable() {
        displayProduct();
        System.out.println("Expires On: " + expirationDate);
        System.out.println("Storage Temp: " + storageTemperature + "°C");
    }
}

public class Single {
    public static void main(String[] args) {
        PerishableProduct milk = new PerishableProduct("SKU123", 50.00, "DairyCo", "2026-01-01", 4.0);
        milk.displayPerishable();
    }
}
