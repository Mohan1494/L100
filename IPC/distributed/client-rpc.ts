import * as net from "net";
 
const SERVER_IP = "10.20.40.36"; 
 
const client = new net.Socket();
 
client.connect(5000, SERVER_IP, () => {
  console.log("Connected to RPC server");
 
  // Call RPC functions
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
