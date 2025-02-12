import { Router } from "express";
import { firstSemResult } from "../controllers/resultController";

const resultRouter = Router();

type Semester = "first" | "second" | "third";
type ExamType = "internal" | "final";

const semesters: Semester[] = ["first", "second", "third"];
const examTypes: ExamType[] = ["internal", "final"];

semesters.forEach((sem) => {
  examTypes.forEach((type) => {
    resultRouter.get(`/${sem}/${type}`, firstSemResult);
  });
});

export default resultRouter;
