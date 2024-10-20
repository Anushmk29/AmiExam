const Exam = require("../Models/examModel")
const User = require("../Models/userModel")

const CreateNewExam = async(req,res)=>{
   try {
    const {name, questions, timeLimit, scheduledDate } = req.body;

    const newExam = new Exam({
            name,
            questions,
            timeLimit,
            scheduledDate
        });

        await newExam.save();
           res.status(201).json({ message: 'Exam created successfully', exam: newExam });

   } catch (error) {
    res.status(500).json({ message: 'Server error', error });
   }
}
const ViewParticularExams = async(req,res)=>{
   try {
          const { examName} = req.body;
    const exam = await Exam.findOne({name:{$regex:examName,$options: "i"}});
      if (!exam) {
         return res.status(404).json({ message: 'Exam not found' });
      }
      res.status(200).json(exam);
    //  console.log(exams);
   } catch (error) {
            res.status(500).json({ message: 'Error fetching exams', error });
   }
}
const AddStudentsToExam  = async(req,res)=>{
   try {

      const { examName ,Studentyear} = req.body;

        // Find the exam by name
      const exam = await Exam.findOne({name:{$regex:examName,$options: "i"}});
       if (!exam) return res.status(404).json({ message: 'Exam not found' });

        // Find students by year
      const students = await User.find({year:Studentyear,role: 'student'})
       if (students.length === 0) return res.status(404).json({ message: 'No students found for the given year' });
      if (!examName) return res.status(404).json({ message: 'Exam not found' });

       // Add student IDs to the exam's students array
      const studentIds = students.map(student => student._id);
      exam.students = [...new Set([...exam.students,...studentIds])]

       await exam.save();

     res.status(200).json({ message: 'Students added to exam successfully', exam });

   } catch (error) {
      res.status(500).json({ message: 'Error adding students to exam', error: error.message });

   }
}

const FetchAddedStudentsToExam = async(req,res)=>{
   try {

      const { examName} = req.body;

        // Find the exam by name
      const exam = await Exam.findOne({name:{$regex:examName,$options: "i"}})

       if (!exam) return res.status(404).json({ message: 'Exam not found' });
       
        // Fetch student details using the IDs stored in exam.students
        const AddedStudents = await User.find({
         _id:{$in: exam.students}},
        'name email year _id'
      );

       const examInfo = {
      _id: exam._id,
      name: exam.name,
      timeLimit: exam.timeLimit,
      scheduledDate: exam.scheduledDate,
    };

     const studentsInfo = AddedStudents.map(student => ({
      _id: student._id,
      name: student.name,
      email: student.email,
      year: student.year,
    }));
        
     res.status(200).json({ message: ' Exam and student information retrieved successfully', 
      exam:examInfo,
    students: studentsInfo,
   });

   } catch (error) {
      res.status(500).json({ message: 'Error fetching exam and student information', error: error.message });
   }
}


module.exports = {CreateNewExam, ViewParticularExams, AddStudentsToExam, FetchAddedStudentsToExam}