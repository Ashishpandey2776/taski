import mongoose from "mongoose";
async function connectDB(){
 try {
   const connection= await mongoose.connect(process.env.DATABASE_URL)
   console.log(connection.connection.host)
 } catch (error) {
    console.log("mongoDB connection faild",error);
 }
}
export default connectDB;