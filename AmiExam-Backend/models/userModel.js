const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true,unique:true },
    year:{type:Number},
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["student", "admin"] },
    progress: [
      {
        examId: { type: mongoose.Schema.Types.ObjectId, ref: "Exam" },
        score: { type: Number },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
