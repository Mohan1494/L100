import { spawn } from "child_process";

// Spawn child process
const child = spawn("node", ["pipe_child.js"]);

// Send message through pipe (stdin)
child.stdin.write("Hello from Parent via Pipe");
child.stdin.end();

// Receive message from child
child.stdout.on("data", (data) => {
  console.log("Parent received:", data.toString());
});
