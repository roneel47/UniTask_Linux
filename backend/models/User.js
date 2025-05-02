import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  usn: { type: String, required: true, unique: true, minlength: 10, maxlength: 10 },
  name: String,
  email: String,
  password: {type: String, required: true, },
  role: { type: String, enum: ["student", "admin"], default: "student" }
});

export default mongoose.model("User", userSchema);
