import express from "express";
import connectDB from "./database/index.js";
import userRouter from "./routes/user.js";
import taskRouter from "./routes/task.js"
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import 'dotenv/config'

 const app=express();
 app.use(bodyParser.json()); 
 app.use(cookieParser())
 app.use(express.json())
 app.use("/api/v1/users",userRouter);
 app.use("/api/v1/tasks",taskRouter)
 


 
 app.get("/",(req,res)=>{
   res.send("everything looks good");
});

 connectDB()
 .then(()=>{
   app.listen(5000,()=>{
      console.log("server is running on 5000");
   });
 }).catch((e)=>{
   console.log("connection faild",e);
 })

 
 