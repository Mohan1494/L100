import socket
import threading

clients = []

def broadcast(message):
    for client in clients:
        client.sendall(message.encode())

def handle_client(conn):
    name = conn.recv(1024).decode().strip()
    clients.append(conn)
    broadcast(f"{name} joined the group\n")

    try:
        while True:
            msg = conn.recv(1024)
            if not msg:
                break
            broadcast(f"{name}: {msg.decode()}")
    finally:
        clients.remove(conn)
        broadcast(f"{name} left the group\n")
        conn.close()

server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
server.bind(("0.0.0.0", 4000))
server.listen()

print("Server running on port 4000")

while True:
    conn, _ = server.accept()
    threading.Thread(target=handle_client, args=(conn,), daemon=True).start()
