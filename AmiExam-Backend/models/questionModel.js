const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema(
  {
    questionText: { type: String, required: true },
    options: [{ type: String }],
    correctAnswer: { type: String, required: true },
    subject: { type: String, required: true },
    difficultyLevel: { type: String, enum: ["easy", "medium", "hard"] },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Question", questionSchema);