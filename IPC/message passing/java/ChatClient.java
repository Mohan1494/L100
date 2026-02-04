import java.io.*;
import java.net.*;

public class ChatClient {

    public static void main(String[] args) throws IOException {
        if (args.length == 0) {
            System.out.println("Usage: java ChatClient <name>");
            return;
        }

        Socket socket = new Socket("localhost", 4000);
        BufferedReader in = new BufferedReader(new InputStreamReader(socket.getInputStream()));
        PrintWriter out = new PrintWriter(socket.getOutputStream(), true);
        BufferedReader userInput = new BufferedReader(new InputStreamReader(System.in));

        out.println(args[0]);

        new Thread(() -> {
            try {
                String msg;
                while ((msg = in.readLine()) != null) {
                    System.out.println(msg);
                }
            } catch (IOException ignored) {}
        }).start();

        String input;
        while ((input = userInput.readLine()) != null) {
            if (input.equals("/exit")) {
                socket.close();
                break;
            }
            out.println(input);
        }
    }
}
