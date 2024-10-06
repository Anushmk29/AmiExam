const mongoose = require("mongoose");

const examSchema = new mongoose.Schema(
  {
    examName: { type: String, required: true },
    questions: [{
         type: mongoose.Schema.Types.ObjectId, 
         ref: "Question" }],
         
    timeLimit: {
        type: Number, // in minutes
        default: 60  // Default exam duration
    },
    scheduledDate: {
        type: Date,
        required: true
    },
     status: {
        type: String,
        enum: ['Scheduled', 'Completed'],
        default: 'Scheduled'
    },
      students: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student'
    }],
    createdBy: { 
        type: mongoose.Schema.Types.ObjectId,
         ref: "User" },
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Exam", examSchema);
