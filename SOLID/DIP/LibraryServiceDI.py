from abc import ABC, abstractmethod

# Abstraction
class FineCalculator(ABC):
    @abstractmethod
    def calculate_fine(self, late_days):
        pass


# Implementations
class RegularFineCalculator(FineCalculator):
    def calculate_fine(self, late_days):
        return late_days * 5


class ExamTimeFineCalculator(FineCalculator):
    def calculate_fine(self, late_days):
        return late_days * 2


class NoFineCalculator(FineCalculator):
    def calculate_fine(self, late_days):
        return 0


# High-level module
class LibraryService:
    def __init__(self, calculator: FineCalculator):
        self._calculator = calculator

    def get_fine(self, late_days):
        return self._calculator.calculate_fine(late_days)


# Main
calculator = ExamTimeFineCalculator()
service = LibraryService(calculator)

print(service.get_fine(3))
