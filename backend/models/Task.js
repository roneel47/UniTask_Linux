import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  title: String,
  description: String,
  status: { type: String, enum: ["to-do", "in-progress", "completed", "done"], default: "to-do" },
  usn: String,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Task", taskSchema);
