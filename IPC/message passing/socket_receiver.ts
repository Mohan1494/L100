import net from "net";

const socket = net.connect(4000, "localhost", () => {
  console.log("Receiver connected to queue");
});

socket.on("data", (data) => {
  console.log("Receiver got:", data.toString().trim());
});

socket.on("close", () => {
  console.log("Connection closed");
});
