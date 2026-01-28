import { Worker } from "worker_threads";

console.time("Multi Thread");

const workers = [];
const results: number[] = [];

const ranges = [
  { start: 1, end: 250_000_000 },
  { start: 250_000_001, end: 500_000_000 },
  { start: 500_000_001, end: 750_000_000 },
  { start: 750_000_001, end: 1_000_000_000 }
];

for (const range of ranges) {
  workers.push(
    new Promise<number>((resolve) => {
      const worker = new Worker("./dist/worker.js", {
        workerData: range
      });
      worker.on("message", resolve);
    })
  );
}

Promise.all(workers).then((values) => {
  const total = values.reduce((a, b) => a + b, 0);
  console.timeEnd("Multi Thread");
  console.log("Sum:", total);
});
