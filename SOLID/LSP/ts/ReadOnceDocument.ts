class Document2 {
  protected isOpen: boolean = false;

  open(): void {
    this.isOpen = true;
    console.log("Document2 opened");
  }

  edit(): void {
    if (!this.isOpen) {
      throw new Error("Document2 must be open");
    }
    console.log("Editing Document2");
  }

  close(): void {
    this.isOpen = false;
    console.log("Document2 closed");
  }
}

class ReadOnceDocument2 {
  private Document2: Document2 = new Document2();
  private alreadyOpened: boolean = false;

  open(): void {
    if (this.alreadyOpened) {
      throw new Error("Document2 cannot be reopened");
    }
    this.alreadyOpened = true;
    this.Document2.open();
  }

  edit(): void {
    this.Document2.edit();
  }

  close(): void {
    this.Document2.close();
  }
}
