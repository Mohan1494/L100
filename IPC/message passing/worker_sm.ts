import { workerData } from "worker_threads";

// Access shared memory
const sharedArray = new Int32Array(workerData);

// Modify shared memory
for (let i = 0; i < 5; i++) {
  Atomics.add(sharedArray, 0, 1);
}

console.log("Worker: Updated value =", sharedArray[0]);
