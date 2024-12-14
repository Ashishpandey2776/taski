import mongoose, { Schema } from "mongoose";
import { User } from "./user.model";
const TaskSchema=new Schema({
    tittle:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    status:{
        type:Boolean,
        default:false,
        require:true
    },
    user:{
        type:mongoose.Schema.ObjectId,
        ref:"User"
    },
    createdAt:{
        type:Date,
        default:Date.now
    }  
})
 export const Task=mongoose.model("Task",TaskSchema);