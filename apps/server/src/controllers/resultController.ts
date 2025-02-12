import { firstInternal, firstFinal } from "../models/resultModel";
import { Request, Response, NextFunction } from "express";

async function firstSemResult(
  req: Request,
  res: Response,
  _next: NextFunction
) {
  const result = await firstInternal.findAll({
    attributes: [
      "RollNo",
      "ExamRollNo",
      "Name",
      "PuRegNo",
      "Basic_Eng_Drawing",
      "Calculus_I",
      "Digital_Logic",
      "Discrete_Struct",
      "PST",
      "Prog_C",
    ],
  });
  if (!result) {
    return res.status(400).json({ message: "Error " });
  }
  res.status(200).send(result);
}

export { firstSemResult };
