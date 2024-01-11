import express, { Request, Response, Application } from "express";
import { processQueue } from "./producers/redis.producer";
import bodyParser from "body-parser";
import dotenv from "dotenv";
dotenv.config();

const app: Application = express();

app.use(bodyParser.json());

const port = process.env.PORT || 3003;

const body = [
  {
    name: "Mohamed",
    salary: 10000,
  },
  {
    name: "Thowfeeq",
    salary: 5000,
  },
];
processQueue(body);

app.listen(port, () => {
  console.log(`Server starts with http://localhost:${port}`);
});
