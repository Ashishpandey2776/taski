import express from "express";
import connectDB from "./database/index.js";
import userRouter from "./routes/user.js";
import taskRouter from "./routes/task.js"
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import {errorHandler} from "./middlewares/errorHandeler.js"
import {config} from "dotenv"
import cors from "cors"

config({
 path:"./config.env"
})

console.log(process.env.PORT)

 const app=express();
 app.use(bodyParser.json()); 
 app.use(cookieParser())
 app.use(express.json())
 app.use(cors({
   origin:[process.env.FRONTEND_URL],
   methods:["GET","POST","PUT","DELETE"],
   credentials:true
 }));
 app.use("/api/v1/users",userRouter);
 app.use("/api/v1/tasks",taskRouter)
 


 
 app.get("/",(req,res)=>{
   res.send("everything looks good");
});

app.use(errorHandler);

 connectDB()
 .then(()=>{
   app.listen(process.env.PORT,()=>{
      console.log("server is running on 5000");
   });
 }).catch((e)=>{
   console.log("connection faild",e);
 })

 
 