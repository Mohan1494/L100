import sys

print("Child is ready to communicate", flush=True)

for line in sys.stdin:
    print("Child received:", line.strip(), flush=True)
    print("Hello Parent, message received by Child", flush=True)
