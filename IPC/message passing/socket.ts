import net from "net";

const receivers: net.Socket[] = [];

const server = net.createServer((socket) => {
  console.log("Client connected");

  receivers.push(socket);

  socket.on("end", () => {
    console.log("Client disconnected"); 
  });

  socket.on("error", console.error);
});

server.listen(4000, () => {
  console.log("Message Queue running on port 4000");
});

// Accept messages from senders
server.on("connection", (socket) => {
  socket.on("data", (data) => {
    for (const client of receivers) {
      client.write(data);
    }
  });
});
