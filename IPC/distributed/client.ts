// client.ts
import net from "net";

const client = net.createConnection({ port: 4000 }, () => {
  client.write("Hello Server");
});

client.on("data", (data: Buffer) => {
  console.log("Server replied:", data.toString());
});

client.on("error", console.error);
