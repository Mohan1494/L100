function taskA(): Promise<string> {
    return new Promise(resolve => {
        setTimeout(() => resolve("Task A done"), 2000);
    });
}

function taskB(): Promise<string> {
    return new Promise(resolve => {
        setTimeout(() => resolve("Task B done"), 3000);
    });
}

function taskC(): Promise<string> {
    return new Promise(resolve => {
        setTimeout(() => resolve("Task C done"), 1000);
    });
}

async function withoutConcurrency() {
    console.time("Without Concurrency");

    const a = await taskA(); // 2s
    const b = await taskB(); // 3s
    const c = await taskC(); // 1s

    console.log(a, b, c);
    console.timeEnd("Without Concurrency");
}

withoutConcurrency();
