import express from "express"
import  { register,login,MyProfile,logoutUser } from "../controller/user.js"
import { isAuth } from "../middlewares/isAuthentication.js"
const router=express.Router()
//register
router.post("/register",register)
//login
router.get("/login",login);
//myprofile
router.get("/me",isAuth,MyProfile);
//logout
router.get("/logout",isAuth,logoutUser); 
export default router