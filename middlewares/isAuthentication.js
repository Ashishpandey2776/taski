import jwt from "jsonwebtoken";
import { User } from "../modals/user.model.js";
export const isAuth=async(req,res,next)=>{
    const {token}=req.cookies
    if(!token){
     return res.status(404).json({
         success:false,
         message:"login first"
     })
    }
    const decode=jwt.verify(token,"mysecret")
     req.user=await User.findOne({_id:decode._id})
    
    next()
}