import express from "express"
import  { register,login,MyProfile } from "../controller/user.js"
import { isAuth } from "../middlewares/isAuthentication.js"
const router=express.Router()
//register
router.post("/register",register)
//login
router.get("/login",login);
//myprofile
router.get("/me",isAuth,MyProfile);
export default router