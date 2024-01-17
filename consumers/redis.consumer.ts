import { Job } from "bull";

const sleep = async (delay: number) => {
  return new Promise((resolve) => setTimeout(resolve, delay));
};

const processConsumer = async (job: Job) => {
  if (job?.data?.data?.length > 0) {
    for (const employee of job?.data?.data) {
      const { name, salary } = employee;
      if (typeof salary !== "number") {
        throw "Salary not a correct format";
      } else {
        console.log(
          JSON.stringify({
            employee_name: name,
            salary,
            status: "CREDITED",
          })
        );
      }

      await sleep(3000);
    }
  }
  return Promise.resolve();
};

export { processConsumer };
