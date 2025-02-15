import { firstInternal, firstFinal } from "../models/resultModel";
import { Request, Response, NextFunction } from "express";

async function firstSemInternal() {
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
    return { message: "Result not found" };
  }
  return result;
}


async function firstSemFinal() {
  const result = await firstFinal.findAll({
    attributes: [
      "RollNo",
      "ExamRollNo",
      "Name",
      "Basic_Eng_Drawing",
      "Calculus_I",
      "Digital_Logic",
      "Discrete_Struct",
      "PST",
      "Prog_C",
      "SGPA",
    ],
  });
  if (!result) {
    return { message: "Result not found" };
  }
  return result;
}


async function firstSemResult(
  req: Request,
  res: Response,
  _next: NextFunction
) {
  // type ExamType = "internal" | "final";
  const examType = req.params.examType;
  console.log(examType);
  if (examType === "internal") {
    const result = await firstSemInternal();
    res.status(200).json(result);
  }
  if (examType === "final") {
    const result = await firstSemFinal();
    res.status(200).json(result);
  }
}

export { firstSemResult };
