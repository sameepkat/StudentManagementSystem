import { StudentLogin, StudentInfo } from "../models/studentModel";
import { NextFunction, Request, Response } from "express";

async function studentLoginList(
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  const studentLoginInfo = await StudentLogin.findAll({
    attributes: ["username", "Name", "password"],
  });
  res.status(200).json(studentLoginInfo);
}

async function studentInfoList(
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  const studentInfo = await StudentInfo.findAll({
    attributes: [
      "RollNo",
      "Name",
      "ExamRollNo",
      "PuRegNo",
      "Email",
      "Address",
      "PhNo",
      "Sex",
    ],
  });
  res.status(200).json(studentInfo);
}

async function addStudentLogin(
  req: Request,
  res: Response,
  _next: NextFunction
) {
  const { username, email } = req.body;
  try {
    await StudentLogin.create({
      username,
      email,
    });
    res.status(200).json({ message: "Student added successfully" });
  } catch (error) {
    console.log("Error creating user: ", error);
    res.status(400).json({ message: "Error creating user" });
  }
}

export { studentLoginList, studentInfoList, addStudentLogin };
