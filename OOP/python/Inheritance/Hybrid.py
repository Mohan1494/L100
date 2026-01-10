# Hybrid Inheritance Example

class UniversityMember:
    def __init__(self, member_id, name):
        self.member_id = member_id
        self.name = name


class Student(UniversityMember):
    def __init__(self, member_id, name, credits):
        super().__init__(member_id, name)
        self.credits = credits


class Staff(UniversityMember):
    def __init__(self, member_id, name, salary):
        super().__init__(member_id, name)
        self.salary = salary


class GraduateInstructor(Student, Staff):  # Hybrid + Multiple
    def __init__(self, member_id, name, credits, salary):
        Student.__init__(self, member_id, name, credits)
        Staff.__init__(self, member_id, name, salary)

    def info(self):
        print(f"Name: {self.name}, Credits: {self.credits}, Salary: {self.salary}")


gi = GraduateInstructor("U1001", "Arjun", 24, 35000)
gi.info()
