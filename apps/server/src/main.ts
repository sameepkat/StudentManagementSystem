import express, { Application, Request, Response } from "express";
import type Express from "express";
import testMiddleWare from "./routes/test";
import config from "./config/config";
import studentRouter from "./routes/studentRoutes";
import connectDB from "./db/connectDB";

const app: Application = express();
const PORT: number = config.PORT;

app.use(express.json());
connectDB();

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
