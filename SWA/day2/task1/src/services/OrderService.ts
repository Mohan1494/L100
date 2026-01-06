import { Order } from "../domain/Order";
import { Database } from "../infra/Database";
import { PaymentService } from "./PaymentService";

export class OrderService {
    constructor(
        private db: Database,
        private paymentService: PaymentService
    ) {}

    placeOrder(order: Order) {
        this.paymentService.process(order.total);
        this.db.save(order);
    }
}
