import { Router } from "express";
import {
  studentLoginList,
  addStudentLogin,
  studentInfoList,
} from "../controllers/studentController";

const studentRouter = Router();

studentRouter
  .get("/loginList", studentLoginList)
  .post("/register", addStudentLogin)
  .get("/studentList", studentInfoList)
  .get("/result/final/:sem");

export default studentRouter;
