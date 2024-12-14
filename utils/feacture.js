import jwt from "jsonwebtoken";

export const cookieSet=async(myuser,status=201,message,res)=>{
    const token=await jwt.sign({_id:myuser._id},"mysecret");

    res.status(status)
    .cookie("token",token,{
        httpOnly:true,
        maxAge:15*60*10000
    })
    .json({
        success:true,
        message
    })
}
