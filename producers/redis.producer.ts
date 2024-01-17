import { myQueue } from "../config/redis.config";
import { processConsumer } from "../consumers/redis.consumer";
import { onCompleted, onFailed, onStalled } from "../listeners/redis.listener";

const processQueue = (body: any) => {
  const queueName = 'test-queue';
  const process = myQueue(queueName);
  process.add(
    { data: body },
    { removeOnComplete: true, removeOnFail: true, delay: 1000, attempts: 2 }
  );
  process.process(processConsumer);
  process.on("failed", onFailed);
  process.on("completed", onCompleted);
  process.on("stalled", onStalled);
};

export { processQueue };
