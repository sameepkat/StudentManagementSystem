import Student from "../models/studentModel";
import express, { NextFunction, Request, Response } from "express";

async function studentList(req: Request, res: Response, next: NextFunction) {
  res.json({ message: "Dummy Student List" });
}

export { studentList };
