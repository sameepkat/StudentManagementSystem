import express, { Request, Response, NextFunction, Router } from "express";
import Student from "../models/studentModel";
import { studentList } from "../controllers/studentController";

const studentRouter = Router();

studentRouter.get("/1st", studentList);

export default studentRouter;
