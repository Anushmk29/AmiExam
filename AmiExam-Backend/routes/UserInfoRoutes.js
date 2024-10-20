const express = require("express");
const {CreateUser,LoginInfo,GetAllUser} = require("../controller/UserInfoController");
const router = express.Router();

router.post('/signup',CreateUser).get('/allUser',GetAllUser)
// router.get('/FetchExam',ViewAllExams).get('/AddStudents',AddStudentsToExam)


module.exports = router;