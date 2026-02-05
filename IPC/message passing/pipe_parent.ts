import { spawn } from "child_process";

// Spawn child process with stdin/stdout pipes
const child = spawn("node", ["child_pipe.js"]);

// Read messages coming from child
child.stdout.on("data", (data) => {
  console.log("Parent received:", data.toString().trim());

  child.stdin.write("Hello Child, message received by Parent\n");
});

child.stdin.write("Hello from Parent\n");

// Handle child exit
child.on("close", () => {
  console.log("Child process exited");
});

/*

1. Parent spawns a child process.
2. Parent sends a message to child via stdin.
3. Parent listens on stdout for child messages.
4. Parent replies back to the child.
5. Communication is bidirectional using pipes.
*/
