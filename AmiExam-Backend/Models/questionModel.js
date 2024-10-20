const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    options: [{
        type: String
    }],
    correctAnswer: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    difficulty: {
        type: String,
        enum: ['Easy', 'Medium', 'Hard'],
        required: true
    },
    tags: [String], // metadata for filtering questions
    createdDate: {
        type: Date,
        default: Date.now
    }
});

const Question = mongoose.model('Question', questionSchema);
module.exports = Question;
