import express, { Application, Request, Response } from "express";
import testMiddleWare from "./routes/test";
import config from "./config/config";
import studentRouter from "./routes/studentRoutes";
import { connectMaria } from "./db/connectSQL";

const app: Application = express();
const PORT: number = config.PORT;

app.use(express.json());
connectMaria();

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    message: "Server running",
  });
});

app.get("/test", testMiddleWare);
app.use("/student", studentRouter);

app.listen(PORT, () => {
  console.log(`Server running on localhost://${PORT}`);
});
