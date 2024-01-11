import { myQueue } from "../config/redis.config";

const onFailed = () => {
  myQueue.on("failed", async (job, error) => {
    console.log(
      JSON.stringify({
        status: "NOT CREDITED",
        error,
      })
    );
  });
};

const onCompleted = () => {
  myQueue.on("completed", () => {
    console.log("All employee salary was credited");
  });
};

export { onFailed, onCompleted };
