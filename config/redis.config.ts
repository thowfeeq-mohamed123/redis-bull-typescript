import Queue from "bull";

const myQueue = new Queue("test-queue", {
  redis: process.env.REDIS_URL,
});

export { myQueue };
