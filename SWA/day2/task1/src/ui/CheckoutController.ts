import { CartItem } from "../domain/CartItem";
import { Order } from "../domain/Order";
import { OrderService } from "../services/OrderService";
import { PaymentService } from "../services/PaymentService";
import { StripePayment } from "../infra/StripePayment";
import { Database } from "../infra/Database";

export class CheckoutController {
    checkout() {
        const items = [
            new CartItem("Laptop", 60000, 1),
            new CartItem("Mouse", 500, 2)
        ];
        
        const order = new Order(items);

        const payment = new StripePayment();
        const paymentService = new PaymentService(payment);
        const db = new Database();
        const orderService = new OrderService(db, paymentService);

        orderService.placeOrder(order);
    }
}

new CheckoutController().checkout();
