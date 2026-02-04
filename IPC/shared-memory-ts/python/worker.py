def worker_task(shared_value):
    for _ in range(5):
        with shared_value.get_lock():
            shared_value.value += 1
    print("Worker: Updated value =", shared_value.value)
