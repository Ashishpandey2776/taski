import { User } from "../modals/user.model.js";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken";
import { cookieSet } from "../utils/feacture.js";




//login
export const login=async(req,res,next)=>{
   try {
    const {email,password}=req.body
    const user=await User.findOne({email});
    if(user){
     const isMatch = await bcrypt.compare(password, user.password);
     if(isMatch){
       return cookieSet(user,201,"welcome back",res)
     }else{
       return next(new Error("Invaild Email or password"))
     }
    }else{
     return next(new Error("Invaild email or password"));
    }
   } catch (error) {
    next(error)
   }
}
//register
export const register=async(req,res,next)=>{
   try {
    const {username,email,password} =req.body
    let user=await User.findOne({email});
    if(user){
        return next(new Error("user already exits"))
    }else{
     const hashpassword=await bcrypt.hash(password,10)
      let myuser= await User.create({
            username,
            email,
            password:hashpassword,
        })
       cookieSet(myuser,201,"user create successfull",res)
    }
   } catch (error) {
    next(error)
   }
}
//Myprofile
export const MyProfile=async(req,res,next)=>{
  try {
    res.status(201).json({
        success:true,
        user:req.user
     })
  } catch (error) {
    next(error)
  }
} 
//logout
export const logoutUser=async(req,res,next)=>{
   try {
    res.status(201).cookie("token","",{maxage:Date.now}).json({
        success:true,
        message:"logout successfull"
    });
   } catch (error) {
     next(error)
   }
}