class SecuritySystem:
    def verify_access(self, user_id, pin=None, *biometric_data):
        if pin is None:
            return f"Access check started for User ID: {user_id}"

        elif not biometric_data:
            return f"User {user_id} verified using PIN"

        else:
            return f"User {user_id} verified using PIN and biometric data"

# Create object
system = SecuritySystem()

# Different method calls
print(system.verify_access(101))
print(system.verify_access(101, 4321))
print(system.verify_access(101, 4321, "fingerprint", "face_scan"))
