import * as net from "net";

const SERVER_IP = "10.20.40.36";

const client = new net.Socket();

client.connect(5000, SERVER_IP, () => {
  console.log("Connected to RPC server");

  const addRequest = { method: "multiply", params: [5, 3] };

  client.write(JSON.stringify(addRequest));
});

client.on("data", (data) => {
  const response = JSON.parse(data.toString());

  console.log("RPC Result:", response.result);

  client.destroy();
});

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
