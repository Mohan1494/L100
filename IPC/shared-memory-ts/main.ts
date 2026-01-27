import { Worker } from "worker_threads";

const sharedBuffer = new SharedArrayBuffer(4);
const sharedArray = new Int32Array(sharedBuffer);

sharedArray[0] = 0;

console.log("Main: Initial value =", sharedArray[0]);

// Create worker and pass shared memory
const worker = new Worker("./worker.js", {
  workerData: sharedBuffer
});

// Read updated value after worker finishes
worker.on("exit", () => {
  console.log("Main: Final value =", sharedArray[0]);
});
