const bcrypt =require("bcryptjs");
const User = require("../model/User")

const register =async (req,res,next)=>{
   try {
       const {name,email,password} = req.body;
       
    //    check required feild
    if(!name || !email || !password){
        return res.status(400).json ({
            success:false,
            message:"Name,email and password are required"
        })
    }
    // check if user  already exists
    const existingUser= await User.findOne({email})

    if(existingUser){
        return res.status(400).json({
            success:false,
            meaage:"User already exists"
        })
    }
// hash password
const hashedPassword =await bcrypt.hash(password,10)

// create user
const user=await User.create({
    name,email,
    password:hashedPassword
})
res.status(200).json({
    sucsess:true,
    message :"User registered sucessfully",
    data :{
        id :user._id,
        name :user.name,
        email:user.email,
        role:user.role
    }
})
   } catch (error) {
    next(error)
   }
}
module.exports= {
    register
}