import { myQueue } from "../config/redis.config";
import { processConsumer } from "../consumers/redis.consumer";
import { onCompleted, onFailed } from "../listeners/redis.listener";

const processQueue = async (body: any) => {
  await myQueue.add(
    { data: body },
    { removeOnComplete: true, removeOnFail: true }
  );
  await processConsumer();
  await onFailed();
  await onCompleted();
};

export { processQueue };
