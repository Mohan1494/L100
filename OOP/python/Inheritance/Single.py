# Single Inheritance Example

class Product:
    def __init__(self, price, id, manufacturer):
        self.price = price
        self.id = id
        self.manufacturer = manufacturer

    def display_info(self):
        print(f"ID: {self.id}, Price: {self.price}, Maker: {self.manufacturer}")


class PerishableProduct(Product):  # Single inheritance
    def __init__(self, price, id, manufacturer, expiration_date, storage_temp):
        super().__init__(price, id, manufacturer)
        self.expiration_date = expiration_date
        self.storage_temp = storage_temp

    def show_perishable_details(self):
        self.display_info()
        print(f"Expires On: {self.expiration_date}, Storage Temp: {self.storage_temp}°C")


item = PerishableProduct(100, "A123", "Nestle", "2026-01-31", 4)
item.show_perishable_details()
