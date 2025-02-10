import mongoose from "mongoose";
import config from "../config/config";

const MONGODB_URI: string = config.DATABASE_URL;

export default async function connectDB() {
  mongoose
    .connect(MONGODB_URI)
    .then(() => {
      console.log("Connected to DB: " + MONGODB_URI);
      process.env.connectDB = "true";
    })
    .catch((error) => {
      console.error("Connection with DB failed:", error.message);
      console.error("Full error:\n", error);
      process.env.connectDB = "false";
    });
}
