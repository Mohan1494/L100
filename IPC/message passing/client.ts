import * as net from "net";
import * as readline from "readline";

const name = process.argv[2];
if (!name) {
  console.log("Usage: node client.js <your-name>");
  process.exit(1);
}

const socket = net.connect(4000, "localhost", () => {
  socket.write(name + "\n"); 
});

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Send messages typed by the user
rl.on("line", (input) => {
  if (input === "/exit") {
    console.log(" Leaving the group...");
    socket.end();   // Disconnect from server
    rl.close();
  } else {
    socket.write(input + "\n");
  }
});

// Receive messages from server
socket.on("data", (data) => {
  console.log(data.toString().trim());
});

// Handle server disconnect
socket.on("close", () => {
  console.log(" Disconnected from group");
  process.exit(0);
});

/*
FLOW SUMMARY:
1. Client starts with a username passed via command line.
2. Client connects to the TCP server on port 4000.
3. Username is sent as the first message.
4. User inputs are sent to the server as chat messages.
5. Messages from other clients are displayed in the terminal.
6. Client exits gracefully when '/exit' is typed or server disconnects.
*/
