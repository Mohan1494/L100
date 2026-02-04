// Listen for messages from parent via stdin
process.stdin.on("data", (data) => {
  console.log("Child received:", data.toString().trim());

  // Send response back to parent
  process.stdout.write("Hello Parent, message received by Child\n");
});

// Notify parent that child is ready
process.stdout.write("Child is ready to communicate\n");

/*

1. Child process starts and notifies parent.
2. Child listens for incoming data from parent.
3. Child reads messages via stdin.
4. Child responds back via stdout.
5. Both processes can read and write independently.
*/
