console.time("Single Thread");

let sum = 0;
for (let i = 1; i <= 1_000_000_000; i++) {
  sum += i;
}

console.timeEnd("Single Thread");
console.log("Sum:", sum);
