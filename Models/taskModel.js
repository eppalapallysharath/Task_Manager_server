const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    status: {
      type: String,
      enum: ["To Do", "Inprogress", "Completed"],
      default: "To Do",
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    }, // forming relationship between task schema with user schema with manager role
    assignTo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    }, // forming relationship between task schema with user schema with employee role
  },
  { timestamps: true }
);

const TaskModel = mongoose.model("tasks", taskSchema);
module.exports = { TaskModel };
