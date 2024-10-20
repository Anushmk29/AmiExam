const User = require("../Models/userModel")

//for login
const LoginInfo = async(req,res)=>{
   try {
      const {username,email} = req.body; 

     res.status(200).json({ message: 'Login succesfull'});
   } catch (error) {
    res.status(500).json({ message: 'Login error', error });
   }
}

//to assign role
const assignRole = (email) => {
  const studentPattern = /^[\w.-]+@s\.amity\.edu$/;
  const adminPattern = /^[\w.-]+@gwa\.amity\.edu$/;

  if (studentPattern.test(email)) {
    return 'student';
  } else if (adminPattern.test(email)) {
    return 'admin';
  } else {
    return 'user'; // Default role if email doesn't match any pattern
  }
};

const CreateUser = async(req,res)=>{
   try {
    const {username,year,email,password} = req.body;
     const role = assignRole(email);

    const userInfo = new User({
      username,year,email,password,role
    });

     await userInfo.save();
     
    res.status(201).json({ message: 'signup succesfull'});
   } catch (error) {
    res.status(500).json({ message: 'signup error', error });
   }
   
}
const GetAllUser = async(req,res)=>{
   try {
    const user = await User.find();
    res.status(200).json({ message: 'Successfully fetched user',user});
   } catch (error) {
    res.status(500).json({ message: 'user fetching error', error });
   }
   
}

module.exports= {CreateUser,LoginInfo,GetAllUser}

// /^[\w\.-]+@s\.amity\.edu$/;
// /^[\w\.-]+@gwa\.amity\.edu$/;