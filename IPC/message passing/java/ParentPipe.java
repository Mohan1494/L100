import java.io.*;

public class ParentPipe {

    public static void main(String[] args) throws Exception {

        ProcessBuilder pb = new ProcessBuilder("java", "ChildPipe");
        Process child = pb.start();

        BufferedReader childOut = new BufferedReader(
                new InputStreamReader(child.getInputStream()));
        BufferedWriter childIn = new BufferedWriter(
                new OutputStreamWriter(child.getOutputStream()));

        new Thread(() -> {
            try {
                String line;
                while ((line = childOut.readLine()) != null) {
                    System.out.println("Parent received: " + line);
                    childIn.write("Hello Child, message received by Parent\n");
                    childIn.flush();
                }
            } catch (IOException ignored) {}
        }).start();

        childIn.write("Hello from Parent\n");
        childIn.flush();

        child.waitFor();
        System.out.println("Child process exited");
    }
}
