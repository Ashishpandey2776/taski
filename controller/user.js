import { User } from "../modals/user.model.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";
import { cookieSet } from "../utils/feacture.js";




//login
export const login=async(req,res)=>{
    const {email,password}=req.body
   const user=await User.findOne({email});
   if(user){
    const isMatch = await bcrypt.compare(password, user.password);
    if(isMatch){
      return cookieSet(user,201,"welcome back",res)
    }else{
        return res.status(404).json({
            success:false,
            message:"Invaild email or password"
        });
    }
   }else{
    return res.status(404).json({
        success:false,
        message:"Invaild email or password"
    });
   }
}
//register
export const register=async(req,res)=>{
    const {username,email,password} =req.body
    let user=await User.findOne({email});
    if(user){
        return res.status(404).json({
            success:false,
            message:"user already exits"
        })
    }else{
     const hashpassword=await bcrypt.hash(password,10)
      let myuser= await User.create({
            username,
            email,
            password:hashpassword,
        })
       cookieSet(myuser,201,"user create successfull",res)
    }
}
//Myprofile
export const MyProfile=async(req,res)=>{
  res.status(201).json({
     success:true,
     user:req.user
  })
} 