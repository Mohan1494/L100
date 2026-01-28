import { Worker } from "worker_threads";

const worker = new Worker("./dist/worker.js");

// Send messages (queue behavior)
worker.postMessage("Order Created");
worker.postMessage("Payment Completed");
worker.postMessage("Order Shipped");

console.log("Main: Messages sent to queue");
