# Multilevel Inheritance Example

class Aircraft:
    def __init__(self, altitude, velocity):
        self.altitude = altitude
        self.velocity = velocity


class CommercialJet(Aircraft):
    def __init__(self, altitude, velocity, passenger_capacity):
        super().__init__(altitude, velocity)
        self.passenger_capacity = passenger_capacity


class Boeing747(CommercialJet):
    def __init__(self, altitude, velocity, passenger_capacity, wing_span):
        super().__init__(altitude, velocity, passenger_capacity)
        self.wing_span = wing_span

    def details(self):
        print(f"Altitude: {self.altitude} ft, Velocity: {self.velocity} km/h")
        print(f"Passengers: {self.passenger_capacity}, Wing Span: {self.wing_span}m")


plane = Boeing747(35000, 900, 400, 68)
plane.details()
