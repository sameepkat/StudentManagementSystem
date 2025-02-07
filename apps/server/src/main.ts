import express, { Request, Response } from "express";
import testMiddleWare from "./routes/test";

const app = express();
const PORT = 8000;

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    message: "Server running",
  });
});

app.get("/test", testMiddleWare);

app.listen(PORT, () => {
  console.log(`Server running on localhost://${PORT}`);
});
