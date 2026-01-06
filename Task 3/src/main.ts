let count = 0;

const btn = document.getElementById("btn")!;
const countSpan = document.getElementById("count")!;

btn.onclick = () => {
  count++;
  countSpan.textContent = count.toString();
};

// Create worker
const worker = new Worker("../dist/worker.js");

console.log("Starting heavy task in worker...");
worker.postMessage("start");

worker.onmessage = (event) => {
  console.log("Worker finished:", event.data);
};
