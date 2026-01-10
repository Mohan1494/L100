 // Base Interface
interface UniversityMember {
  showID(): void;
}

// First Branch
interface Staff extends UniversityMember {
  showSalary(): void;
}

// Second Branch
interface Student extends UniversityMember {
  showCredits(): void;
}

// Class implementing multiple interfaces
class GraduateInstructor implements Staff, Student {
  showID() {
    console.log("ID: U12345");
  }

  showSalary() {
    console.log("Salary: ₹25,000");
  }

  showCredits() {
    console.log("Credits: 12");
  }
}

const gi = new GraduateInstructor();
gi.showID();
gi.showSalary();
gi.showCredits();
