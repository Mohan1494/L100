import socket
import threading
import sys

if len(sys.argv) < 2:
    print("Usage: python client.py <name>")
    sys.exit(1)

name = sys.argv[1]

client = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
client.connect(("localhost", 4000))
client.sendall((name + "\n").encode())

def receive():
    while True:
        try:
            msg = client.recv(1024)
            if not msg:
                break
            print(msg.decode().strip())
        except:
            break

threading.Thread(target=receive, daemon=True).start()

while True:
    msg = input()
    if msg == "/exit":
        client.close()
        break
    client.sendall((msg + "\n").encode())
