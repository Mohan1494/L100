function fetchUser(): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("User data loaded");
        }, 2000);
    });
}

function fetchOrders(): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Orders loaded");
        }, 3000);
    });
}

function fetchNotifications(): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Notifications loaded");
        }, 1000);
    });
}

// Concurrency using Promise.all
async function loadDashboard() {
    console.log("Loading dashboard...");

    const results = await Promise.all([
        fetchUser(),
        fetchOrders(),
        fetchNotifications()
    ]);

    console.log(results);
}
async function loadSequentially() {
    const user = await fetchUser();
    const orders = await fetchOrders();
    const notifications = await fetchNotifications();

    console.log(user, orders, notifications);
}

loadDashboard();
