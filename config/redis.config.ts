import Bull from "bull";
import Queue from "bull";

const myQueue = (name: string): Bull.Queue<any> => {
  try {
    return new Queue(name, {
      // redis: process.env.REDIS_URL,
      redis: {
        host: process.env.REDIS_HOST,
        port: parseInt(process.env.REDIS_PORT as string),
      },
    });
  } catch (err) {
    throw err;
  }
};

export { myQueue };
