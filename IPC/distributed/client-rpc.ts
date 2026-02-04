import * as net from "net";

// RPC server IP address
const SERVER_IP = "10.20.40.36";

// Create a TCP client socket
const client = new net.Socket();

// Connect to the RPC server
client.connect(5000, SERVER_IP, () => {
  console.log("Connected to RPC server");

  // Create an RPC request (method name + parameters)
  const addRequest = { method: "multiply", params: [5, 3] };

  // Send RPC request to server
  client.write(JSON.stringify(addRequest));
});

// Receive response from RPC server
client.on("data", (data) => {
  const response = JSON.parse(data.toString());

  // Print the result returned by the RPC call
  console.log("RPC Result:", response.result);

  // Close the connection after response
  client.destroy();
});

// Handle connection close
client.on("close", () => {
  console.log("Connection closed");
});

/*
FLOW SUMMARY:
1. Client creates a TCP socket.
2. Client connects to the RPC server using IP and port.
3. Client sends an RPC request containing method name and parameters.
4. Server executes the requested method and sends back a response.
5. Client reads the response, prints the result, and closes the connection.
*/
