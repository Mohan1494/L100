import { Worker } from "worker_threads";

const sharedBuffer = new SharedArrayBuffer(4);

const sharedArray = new Int32Array(sharedBuffer);

sharedArray[0] = 10;

console.log("Main: Initial value =", sharedArray[0]);

const worker = new Worker("./worker.js", {
  workerData: sharedBuffer
});

worker.on("exit", () => {
  console.log("Main: Final value =", sharedArray[0]);
});

/*

1. Main thread creates shared memory and initializes a value.
2. The shared memory is passed to a worker thread.
3. Both threads access the same memory location.
4. Worker modifies the shared value.
5. Main thread reads the updated value after the worker exits.
*/
