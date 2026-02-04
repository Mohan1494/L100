import subprocess
import threading

child = subprocess.Popen(
    ["python", "child_pipe.py"],
    stdin=subprocess.PIPE,
    stdout=subprocess.PIPE,
    text=True
)

def read_child():
    for line in child.stdout:
        print("Parent received:", line.strip())
        child.stdin.write("Hello Child, message received by Parent\n")
        child.stdin.flush()

threading.Thread(target=read_child, daemon=True).start()

child.stdin.write("Hello from Parent\n")
child.stdin.flush()

child.wait()
print("Child process exited")
