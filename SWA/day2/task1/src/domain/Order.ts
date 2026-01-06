import { CartItem } from "./CartItem";

export class Order {
    constructor(public items: CartItem[]) {}

    get total(): number {
        return this.items.reduce((sum, i) => sum + i.price * i.quantity, 0);
    }
}
