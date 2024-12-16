import express from "express"
import { addTask,deleteTask,myTask, updateStatus } from "../controller/task.js";
import { isAuth } from "../middlewares/isAuthentication.js"
const router=express.Router();

//add task
router.post("/add",isAuth,addTask);
//get alltask
router.get("/my",isAuth,myTask)
//update and delete
router.route("/:id").put(isAuth,updateStatus).delete(isAuth,deleteTask)

export default router;