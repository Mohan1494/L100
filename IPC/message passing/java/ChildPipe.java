import java.io.*;

public class ChildPipe {

    public static void main(String[] args) throws Exception {

        BufferedReader in = new BufferedReader(
                new InputStreamReader(System.in));
        BufferedWriter out = new BufferedWriter(
                new OutputStreamWriter(System.out));

        out.write("Child is ready to communicate\n");
        out.flush();

        String line;
        while ((line = in.readLine()) != null) {
            System.out.println("Child received: " + line);
            out.write("Hello Parent, message received by Child\n");
            out.flush();
        }
    }
}
