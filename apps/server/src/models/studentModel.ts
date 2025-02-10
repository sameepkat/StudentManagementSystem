import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Must enter username"],
  },
  password: {
    type: String,
    required: [true, "Must enter password"],
  },
});

const Student = mongoose.model("Student", studentSchema);

export default Student;
