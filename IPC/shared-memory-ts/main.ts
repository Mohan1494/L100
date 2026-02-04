import { Worker } from "worker_threads";

// Create a shared memory block of 4 bytes (enough for one 32-bit integer)
const sharedBuffer = new SharedArrayBuffer(4);

// Create a typed view to read/write the shared memory
const sharedArray = new Int32Array(sharedBuffer);

// Initialize the shared value
sharedArray[0] = 10;

console.log("Main: Initial value =", sharedArray[0]);

// Create a worker thread and pass the shared memory reference
const worker = new Worker("./worker.js", {
  workerData: sharedBuffer
});

// This runs after the worker thread has finished execution
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
