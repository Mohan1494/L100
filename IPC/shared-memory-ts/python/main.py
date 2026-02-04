from multiprocessing import Process, Value
from worker import worker_task

if __name__ == "__main__":

    shared_value = Value('i', 10)

    print("Main: Initial value =", shared_value.value)

    p = Process(target=worker_task, args=(shared_value,))
    p.start()
    p.join()

    print("Main: Final value =", shared_value.value)
