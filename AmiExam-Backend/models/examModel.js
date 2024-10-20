const mongoose = require('mongoose');

const examSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    questions: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Question',
        // required: true
    }],
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
    }]
},{timestamps:true});

const Exam = mongoose.model('Exam', examSchema);
module.exports = Exam;
