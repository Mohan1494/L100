import { Order } from "../domain/Order";

export class Database {
    save(order: Order): void {
        console.log("Saving order to database...");
    }
}
