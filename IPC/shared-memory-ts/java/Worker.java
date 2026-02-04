public class Worker extends Thread {

    @Override
    public void run() {
        for (int i = 0; i < 5; i++) {
            Main.sharedValue.incrementAndGet();
        }
        System.out.println("Worker: Updated value = " + Main.sharedValue.get());
    }
}
