import mongoose, { Schema } from "mongoose";
import  {User}  from "./user.model.js";
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
        required:true
    },
    user:{
        type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true
    },
    createdAt:{
        type:Date,
        default:Date.now
    }  
})
 export const Task=mongoose.model("Task",TaskSchema);