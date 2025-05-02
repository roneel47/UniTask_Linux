import express from "express";
import Task from "../models/Task.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

// Get tasks by USN
router.get("/:usn", verifyToken, async (req, res) => {
  try {
    const tasks = await Task.find({ assignedTo: req.params.usn });
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch tasks" });
  }
});

// Update task status
router.put("/:id", verifyToken,async (req, res) => {
  const { status } = req.body;
  try {
    const updated = await Task.findByIdAndUpdate(req.params.id, { status }, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: "Failed to update task" });
  }
});

export default router;
