class Document {

    protected boolean isOpen = false;

    public void open() {
        isOpen = true;
        System.out.println("Document opened");
    }

    public void edit() {
        if (!isOpen) {
            throw new IllegalStateException("Document must be open");
        }
        System.out.println("Editing document");
    }

    public void close() {
        isOpen = false;
        System.out.println("Document closed");
    }
}
class ReadOnceDocument extends Document {

    private boolean alreadyOpened = false;

    @Override
    public void open() {
        if (alreadyOpened) {
            throw new IllegalStateException("Document cannot be reopened");
        }
        alreadyOpened = true;
        super.open();
    }
}


public class MainDocEditor{
    public static void main(String[] args){
        Document doc = new ReadOnceDocument();
        doc.open();
        doc.close();
        doc.open();  // runtime failure
    }
}