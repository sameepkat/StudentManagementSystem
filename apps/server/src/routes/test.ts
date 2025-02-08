import { Request, Response } from "express";

export default function testMiddleWare(_req: Request, res: Response) {
  res.status(200).send({
    message: "Health: " + res.statusCode + " OK",
  });
}
