const express = require("express");
const { CreateNewExam, ViewParticularExams, AddStudentsToExam, FetchAddedStudentsToExam } = require("../controller/ExamController");
const router = express.Router();
const {AvailableExams,ViewExamsResults,ViewAllExamsResults,ViewStudentProfile,UpdateStudentProfile,StudentDashboard} = require("../controller/StudentController")

//routes used by admin
router.post('/exam', CreateNewExam).patch('/AddStudents', AddStudentsToExam).get('/FetchAddStudents', FetchAddedStudentsToExam).get('/FetchParticularExam', ViewParticularExams);


// routes used by students 
router.get('/:studentId/exam', AvailableExams).post('/:studentId/exam/:examId/submit').get('/:studentId/exam/:examId/results',ViewExamsResults).get('/:studentId/results',ViewAllExamsResults).get('/:studentId/profile',ViewStudentProfile).put('/:studentId/profile',UpdateStudentProfile).get('/:studentId/dashboard',StudentDashboard)


//  log for debugging
// console.log({CreateNewExam, ViewAllExams, AddStudentsToExam, FetchAddedStudentsToExam});

module.exports = router;
