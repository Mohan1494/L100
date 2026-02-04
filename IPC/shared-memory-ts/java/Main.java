import java.util.concurrent.atomic.AtomicInteger;

public class Main {

    static AtomicInteger sharedValue = new AtomicInteger(10);

    public static void main(String[] args) throws InterruptedException {

        System.out.println("Main: Initial value = " + sharedValue.get());

        Worker worker = new Worker();
        worker.start();
        worker.join();

        System.out.println("Main: Final value = " + sharedValue.get());
    }
}
