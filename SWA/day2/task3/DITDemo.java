package task3;
import java.util.ArrayList;
import java.util.List;


class ListManagerNormal {
    protected List<String> items = new ArrayList<>();

    // Base class loops & calls virtual method add()
    public void addRange(List<String> items) {
        for (String item : items) {
            add(item);   // <-- VIRTUAL CALL (fragile point)
        }
    }

    public void add(String item) {
        items.add(item);
    }
}

class CountedListNormal extends ListManagerNormal {
    public int count = 0;

    @Override
    public void add(String item) {
        count++;            // Count each added item
        super.add(item);    // Use parent logic
    }
}




class ListManagerFragile {
    protected List<String> items = new ArrayList<>();

    //  Developer optimizes code — stops calling add()
    public void addRange(List<String> items) {
        addRangeInternal(items);
    }

    // New optimized method directly pushes items inside the list
    private void addRangeInternal(List<String> items) {
        for (String item : items) {
            this.items.add(item);  //  Bypasses overridden add()
        }
    }

    public void add(String item) {
        items.add(item);
    }
}

class CountedListFragile extends ListManagerFragile {
    public int count = 0;

    @Override
    public void add(String item) {
        count++;             // Expecting this to run!
        super.add(item);
    }
}


public class DITDemo {
    public static void main(String[] args) {

        // Working case
        System.out.println("=== NORMAL VERSION (WORKING) ===");
        CountedListNormal normal = new CountedListNormal();
        normal.addRange(List.of("a", "b"));
        System.out.println("Expected Count = 2 → Actual Count = " + normal.count);

        System.out.println();

        // Broken case
        System.out.println("=== FRAGILE VERSION (BROKEN) ===");
        CountedListFragile fragile = new CountedListFragile();
        fragile.addRange(List.of("a", "b"));
        System.out.println("Expected Count = 2 → Actual Count = " + fragile.count);

        System.out.println("\nDone.");
    }
}
