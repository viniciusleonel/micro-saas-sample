export const config = {
    stripe: {
        secretKey: process.env.STRIPE_SECRET_KEY,
        publicKey: process.env.STRIPE_PUBLISHABLE_KEY,
        proPriceId: "price_1PQasaKxnquBx0LQTAtLyzNX",
        webhookSecret: process.env.STRIPE_WEBHOOK_SECRET,
        plans: {
            free: {
                priceId: "price_1PUCLYKxnquBx0LQN4oFUay8",
                quota: {
                    TASKS: 5,
                },
            },
            pro: {
                priceId: "price_1PUCNLKxnquBx0LQmqHCFEnf",
                quota: {
                    TASKS: 100,
                },
            },
        },
    },
};
