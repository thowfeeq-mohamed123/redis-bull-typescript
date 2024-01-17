import { myQueue } from "../config/redis.config";
import { processConsumer } from "../consumers/redis.consumer";
import { onCompleted, onFailed, onStalled } from "../listeners/redis.listener";

const processQueue = (body: any) => {
  myQueue.add(
    { data: body },
    { removeOnComplete: true, removeOnFail: true, delay: 1000, attempts: 2 }
  );
  myQueue.process(processConsumer);
  myQueue.on("failed", onFailed);
  myQueue.on("completed", onCompleted);
  myQueue.on("stalled", onStalled);
};

export { processQueue };
