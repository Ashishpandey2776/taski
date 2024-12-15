import express from "express"
import { addTask } from "../controller/task.js";
const router=express.Router();

//add task
router.post("/add",addTask);

export default router;