// server.ts
import net from "net";

const server = net.createServer((socket: net.Socket) => {
  socket.on("data", (data: Buffer) => {
    console.log("Client says:", data.toString());
    socket.write("Hello from server");
  });

  socket.on("error", console.error);
});

server.listen(4000, () => {
  console.log("Server running on port 4000");
});
