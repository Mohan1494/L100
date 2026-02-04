import * as net from "net";

// Structure to store connected clients
type Client = {
  name: string;
  socket: net.Socket;
};

// List of all connected clients
const clients: Client[] = [];

// Create a TCP server
const server = net.createServer((socket) => {
  let clientName = "";

  // First message from client is treated as the username
  socket.once("data", (data) => {
    clientName = data.toString().trim();

    // Store client details
    clients.push({ name: clientName, socket });

    // Notify all clients that a new user joined
    broadcast(` ${clientName} joined the group\n`);
  });

  // Handle normal chat messages
  socket.on("data", (data) => {
    const message = data.toString().trim();
    broadcast(`${clientName}: ${message}\n`);
  });

  // Handle client disconnect
  socket.on("end", () => {
    removeClient(socket);
    broadcast(` ${clientName} left the group\n`);
  });

  // Log socket errors
  socket.on("error", console.error);
});

// Send message to all connected clients
function broadcast(message: string) {
  for (const client of clients) {
    client.socket.write(message);
  }
}

// Remove disconnected client from the list
function removeClient(socket: net.Socket) {
  const index = clients.findIndex(c => c.socket === socket);
  if (index !== -1) clients.splice(index, 1);
}

// Start the server
server.listen(4000, () => {
  console.log(" Server running on port 4000");
});

/*
1. Server listens for TCP connections on port 4000.
2. Client sends their name as the first message.
3. Server stores the client and broadcasts join notification.
4. Any message from a client is broadcast to all others.
5. When a client disconnects, they are removed and a leave message is broadcast.
*/
