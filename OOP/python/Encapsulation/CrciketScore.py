# CricketScore.py
class CricketScore:
    def __init__(self):
        # Private variables (name mangling)
        self.__runs = 0
        self.__wickets = 0

    # Public setter
    def set_runs(self, runs):
        if runs >= 0:
            self.__runs = runs

    # Public getter
    def get_runs(self):
        return self.__runs

    # Public setter
    def set_wickets(self, wickets):
        if 0 <= wickets <= 10:
            self.__wickets = wickets

    # Public getter
    def get_wickets(self):
        return self.__wickets


# Main file (Cricket.py)
score = CricketScore()  # default constructor

score.set_runs(120)
score.set_wickets(3)

print("Runs:", score.get_runs())
print("Wickets:", score.get_wickets())
