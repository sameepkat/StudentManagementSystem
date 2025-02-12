import { Router } from "express";
import { firstSemResult } from "../controllers/resultController";

const resultRouter = Router();
resultRouter.get(`/first/:examType`, firstSemResult);

export default resultRouter;
