class ReadOnceDocument {

    private final Document document = new Document();
    private boolean alreadyOpened = false;

    public void open() {
        if (alreadyOpened) {
            throw new IllegalStateException("Document cannot be reopened");
        }
        alreadyOpened = true;
        document.open();
    }

    public void edit() {
        document.edit();
    }

    public void close() {
        document.close();
    }
}
