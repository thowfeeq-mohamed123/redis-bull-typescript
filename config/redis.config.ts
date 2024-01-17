import Bull from "bull";
import Queue from "bull";

const myQueue = (name: string): Bull.Queue<any> => {
  try {
    return new Queue(name, {
      redis: process.env.REDIS_URL,
    });
  } catch (err) {
    throw err;
  }
};

export { myQueue };
