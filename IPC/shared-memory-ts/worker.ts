import { workerData } from "worker_threads";

// Create a typed view over the shared memory received from main thread
const sharedArray = new Int32Array(workerData);

// Atomically increment the shared value 5 times
for (let i = 0; i < 5; i++) {
  Atomics.add(sharedArray, 0, 1);
}

// Log the value after modification
console.log("Worker: Updated value =", sharedArray[0]);

/*
1. Worker receives the shared memory from the main thread.
2. A typed array view is created to access the shared data.
3. The shared value is incremented safely using Atomics.
4. The updated value is visible to the main thread as well.
*/
