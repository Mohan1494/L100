class Bird:
    def fly(self):
        print("Bird is flying")

class Penguin(Bird):
    def fly(self):
        raise NotImplementedError("Penguins cannot fly")

# Main execution
if __name__ == "__main__":
    b = Bird()
    p = Penguin()
    b.fly()
    p.fly()