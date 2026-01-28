process.stdin.on("data", (data) => {
  console.log("Child received:", data.toString());

  // Send response back
  process.stdout.write("Hello Parent, Pipe message received");
});
