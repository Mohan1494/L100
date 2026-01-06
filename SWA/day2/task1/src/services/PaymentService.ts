import { PaymentProcessor } from "../domain/PaymentProcessor";

export class PaymentService {
    constructor(private processor: PaymentProcessor) {}

    process(amount: number) {
        this.processor.pay(amount);
    }
}
