import net from "net";

const socket = net.connect(4000, "localhost", () => {
  socket.write("Order Created\n");
  socket.write("Payment Completed\n");

  console.log("Sender: Messages sent");
  socket.end();
});
