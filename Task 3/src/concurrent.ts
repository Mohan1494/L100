function TaskA(): Promise<string> {
    return new Promise(resolve => {
        setTimeout(() => resolve("Task A done"), 2000);
    });
}

function TaskB(): Promise<string> {
    return new Promise(resolve => {
        setTimeout(() => resolve("Task B done"), 3000);
    });
}

function TaskC(): Promise<string> {
    return new Promise(resolve => {
        setTimeout(() => resolve("Task C done"), 1000);
    });
}

async function WthoutConcurrency() {
    console.time("Without Concurrency");

    const a = await TaskA();
    const b = await TaskB();
    const c = await TaskC();

    console.log(a, b, c);
    console.timeEnd("Without Concurrency");
}

async function withConcurrency() {
    console.time("With Concurrency");

    const [a, b, c] = await Promise.all([
        TaskA(),
        TaskB(),
        TaskC()
    ]);

    console.log(a, b, c);
    console.timeEnd("With Concurrency");
}

// Run both
(async () => {
    await WthoutConcurrency();
    await withConcurrency();
})();
