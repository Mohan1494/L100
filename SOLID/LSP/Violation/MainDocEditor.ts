class Document1 {
  protected isOpen: boolean = false;

  open(): void {
    this.isOpen = true;
    console.log("Document1 opened");
  }

  edit(): void {
    if (!this.isOpen) {
      throw new Error("Document1 must be open");
    }
    console.log("Editing Document1");
  }

  close(): void {
    this.isOpen = false;
    console.log("Document1 closed");
  }
}

class ReadOnceDocument1 extends Document1 {
  private alreadyOpened: boolean = false;

  open(): void {
    if (this.alreadyOpened) {
      throw new Error("Document1 cannot be reopened");
    }
    this.alreadyOpened = true;
    super.open();
  }
}

// Main
const doc: Document1 = new ReadOnceDocument1();
doc.open();
doc.close();
doc.open(); // ❌ runtime error
