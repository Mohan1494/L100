class RegularFineCalculator:
    def calculate_fine(self, late_days):
        return late_days * 5


class LibraryService:
    def __init__(self):
        self._calculator = RegularFineCalculator()

    def get_fine(self, late_days):
        return self._calculator.calculate_fine(late_days)
