import { Request, Response } from "express";

export default function testMiddleWare(_req: Request, res: Response) {
  res.status(200).send({
    server: res.statusCode,
    database: process.env.connectDB
      ? "true"
      : "false",
  });
}
