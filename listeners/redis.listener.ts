import { Job } from "bull";

const onFailed = (job: Job, err: any) => {
  console.log(
    JSON.stringify({
      jobId: job.id,
      name: job.queue.name,
      status: "NOT CREDITED",
      message: err.message,
      err,
    })
  );
};

const onCompleted = (job: Job) => {
  console.log("All employee salary was credited");
  console.info(`Job in ${job.queue.name} completed for jobId: ${job.id}`);
  job.remove();
};

const onStalled = (job: Job) => {
  console.info(`Job in ${job.queue.name} stalled for: ${job.id}`);
};

export { onFailed, onCompleted, onStalled };
