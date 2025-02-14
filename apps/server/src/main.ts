import express, { Application, Request, Response } from "express";
import testMiddleWare from "./routes/test";
import config from "./config/config";
import studentRouter from "./routes/studentRoutes";
import resultRouter from "./routes/resultRoutes";
import cors from "cors";
import { connectMaria } from "./db/connectSQL";

const app: Application = express();
const PORT: number = config.PORT;

app.use(express.json());
app.use(cors({ origin: "http://localhost:5173" }));
connectMaria();

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    message: "Server running",
  });
});

app.get("/test", testMiddleWare);
app.use("/student", studentRouter);
app.use("/result", resultRouter);

app.listen(PORT, () => {
  console.log(`Server running on localhost://${PORT}`);
});
