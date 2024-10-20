const Exam = require("../Models/examModel")
const User = require("../Models/userModel")
const Result = require("../Models/resultModel")
const Student = require("../Models/userModel")

const AvailableExams = async(req,res)=>{
    try {
        const { studentId } = req.params;
        // Find exams assigned to the student and that are still scheduled

        const exams = await Exam.find({
            students: studentId,
            scheduledDate: { $gte: new Date() }, // Only future exams
            status: 'Scheduled'
        }).populate('questions')

          res.status(200).json(exams);
        //   console.log(exams);
          

    } catch (error) {
        res.status(500).json({ message: 'Error fetching exams', error });
    }
}

const AttemptExam = async(req,res)=>{
    try {
        const { studentId, examId } = req.params;
        const { answers } = req.body; //array of { questionId, selectedAnswer }
       const exam = await Exam.findById(examId).populate('questions');
        if (!exam) return res.status(404).json({ message: 'Exam not found' });

         let correctAnswers = 0;
        const totalQuestions = exam.questions.length;

        exam.questions.forEach((question)=>{
            
        })

        const score = (correctAnswers/totalQuestions) *100

        // Create a new result entry for this student
        const newResult = new Result({
               student: studentId,
            exam: examId,
            score: score,
            totalQuestions: totalQuestions,
            correctAnswers: correctAnswers
        })
       await newResult.save();
       res.status(201).json({ message: 'Exam submitted successfully', result: newResult });
    } catch (error) {
        res.status(500).json({ message: 'Error submitting exam', error });
    }
}

//After submitting an exam, the student should be able to view their individual exam results.
const ViewExamsResults = async(req,res)=>{
    try {
        
        const { studentId, examId } = req.params;
        const result = await Result.findOne({student: studentId, exam: examId}).populate('exam');

          if (!result) return res.status(404).json({ message: 'Result not found' });

           res.status(200).json(result);

    } catch (error) {
        res.status(500).json({ message: 'Error fetching exam results', error });
    }
}

//route allows students to view their results across all exams, helping them track their progress.
const ViewAllExamsResults = async(req,res)=>{
    try {
        
        const { studentId } = req.params;
        
         // Find all results for the student
        const results = await Result.find({ student: studentId }).populate('exam');
    
        res.status(200).json(results);

    } catch (error) {
        res.status(500).json({ message: 'Error fetching  results', error });
    }
}
const ViewStudentProfile = async(req,res)=>{
    try {
        
        const { studentId } = req.params;
        
         // Find all results for the student
         const student = await Student.findById(studentId);

        if (!student) return res.status(404).json({ message: 'Student not found' });

        res.status(200).json(student);

    } catch (error) {
        res.status(500).json({ message: 'Error fetching profile', error });
    }
}
const UpdateStudentProfile = async(req,res)=>{
    try {
        
        const { studentId } = req.params;
        const updateData = req.body;

        
        const UpdateTheStudent = await Student.findByIdAndUpdate(studentId,updateData, { new: true });
        
       if (!UpdateTheStudent) return res.status(404).json({ message: 'Student not found' });

        res.status(200).json({ message: 'Profile updated successfully', student: UpdateTheStudent });

    } catch (error) {
        res.status(500).json({ message: 'Error updating profile', error });
    }
}

const StudentDashboard = async(req,res)=>{

    try {
       const {studentId} = req.params;

       const result = await Result.find({student:studentId})

       const totalExams = result.length;
        const averageScore = result.reduce((acc, result) => acc + result.score, 0) / totalExams || 0;
        
        res.status(200).json({
            totalExams,
            averageScore,
            result
        });
    } catch (error) {
         res.status(500).json({ message: 'Error fetching dashboard data', error });
    }

}

module.exports = {AvailableExams,ViewExamsResults,ViewAllExamsResults,ViewStudentProfile,UpdateStudentProfile,StudentDashboard}