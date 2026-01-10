class EmotionalState:
    def __init__(self, emotion, energy):
        self.emotion = emotion
        self.energy = energy

    def __add__(self, other):
        combined_emotion = self.emotion + " & " + other.emotion
        combined_energy = self.energy + other.energy
        return EmotionalState(combined_emotion, combined_energy)

    def __str__(self):
        return f"Emotion: {self.emotion}, Energy Level: {self.energy}"

# Create objects
happy = EmotionalState("Happy", 70)
excited = EmotionalState("Excited", 40)

# Use + operator (overloaded)
result = happy + excited

print(result)
