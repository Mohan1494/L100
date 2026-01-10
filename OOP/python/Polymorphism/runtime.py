class Reminder:
    def notify(self):
        return "You have a reminder"

class MorningReminder(Reminder):
    def notify(self):
        return "Good morning! Time to plan your day "

class DeadlineReminder(Reminder):
    def notify(self):
        return " Deadline approaching! Submit your work."

class HealthReminder(Reminder):
    def notify(self):
        return " Remember to drink water and stretch."

# Create objects
generic = Reminder()
morning = MorningReminder()
deadline = DeadlineReminder()
health = HealthReminder()

# Same method name, different behaviors
print(generic.notify())
print(morning.notify())
print(deadline.notify())
print(health.notify())
