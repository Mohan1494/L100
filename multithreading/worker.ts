import { parentPort, workerData } from "worker_threads";

const { start, end } = workerData;

let partialSum = 0;
for (let i = start; i <= end; i++) {
  partialSum += i;
}

parentPort?.postMessage(partialSum);
