import mongoose from "mongoose";
async function connectDB(){
 try {
   const connection= await mongoose.connect('mongodb://127.0.0.1/nodeApi')
   console.log(connection.connection.host)
 } catch (error) {
    console.log("mongoDB connection faild",error);
 }
}
export default connectDB;