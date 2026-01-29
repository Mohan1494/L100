from abc import ABC

class Document:
    def __init__(self):
        self._is_open = False

    def open(self):
        self._is_open = True
        print("Document opened")

    def edit(self):
        if not self._is_open:
            raise RuntimeError("Document must be open")
        print("Editing document")

    def close(self):
        self._is_open = False
        print("Document closed")


class ReadOnceDocument(Document):
    def __init__(self):
        super().__init__()
        self._already_opened = False

    def open(self):
        if self._already_opened:
            raise RuntimeError("Document cannot be reopened")
        self._already_opened = True
        super().open()


# Main
doc: Document = ReadOnceDocument()
doc.open()
doc.close()
doc.open()  # ❌ runtime error
