import express, { Application, Request, Response } from "express";
import type Express from "express";
import testMiddleWare from "./routes/test";
import config from "./config/config";

const app: Application = express();
const PORT: number = config.PORT;

console.log(PORT);

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    message: "Server running",
  });
});

app.get("/test", testMiddleWare);

app.listen(PORT, () => {
  console.log(`Server running on localhost://${PORT}`);
});
