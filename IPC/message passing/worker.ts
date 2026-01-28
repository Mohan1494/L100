import { parentPort } from "worker_threads";

const queue: string[] = [];

parentPort?.on("message", (msg) => {
  queue.push(msg);
  processQueue();
});

function processQueue() {
  while (queue.length > 0) {
    const message = queue.shift();
    console.log("Worker processed:", message);
  }
}
