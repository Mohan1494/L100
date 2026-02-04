import java.io.*;
import java.net.*;
import java.util.*;

public class ChatServer {

    private static final List<ClientHandler> clients = new ArrayList<>();

    public static void main(String[] args) throws IOException {
        ServerSocket serverSocket = new ServerSocket(4000);
        System.out.println("Server running on port 4000");

        while (true) {
            Socket socket = serverSocket.accept();
            ClientHandler handler = new ClientHandler(socket);
            clients.add(handler);
            handler.start();
        }
    }

    static void broadcast(String message) {
        for (ClientHandler client : clients) {
            client.sendMessage(message);
        }
    }

    static void removeClient(ClientHandler client) {
        clients.remove(client);
    }

    static class ClientHandler extends Thread {
        private final Socket socket;
        private PrintWriter out;
        private BufferedReader in;
        private String name;

        ClientHandler(Socket socket) {
            this.socket = socket;
        }

        public void run() {
            try {
                in = new BufferedReader(new InputStreamReader(socket.getInputStream()));
                out = new PrintWriter(socket.getOutputStream(), true);

                name = in.readLine();
                broadcast(name + " joined the group");

                String message;
                while ((message = in.readLine()) != null) {
                    broadcast(name + ": " + message);
                }
            } catch (IOException ignored) {
            } finally {
                removeClient(this);
                broadcast(name + " left the group");
                try {
                    socket.close();
                } catch (IOException ignored) {}
            }
        }

        void sendMessage(String message) {
            out.println(message);
        }
    }
}
