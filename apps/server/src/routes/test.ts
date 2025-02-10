import { Request, Response } from "express";

export default function testMiddleWare(_req: Request, res: Response) {
  res.status(200).send({
    server: "Health: " + res.statusCode + " OK",
    database: process.env.connectDB
      ? "Connected to DB"
      : "Could not connect to Database",
  });
}
