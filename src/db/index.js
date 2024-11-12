import mongoose from "mongoose";
import { db_NAME } from "../constants.js";



const connectDB = async()=>{
 try {
  const conntectionInstance=await mongoose.connect(`${process.env.MONGODB_URI}/${db_NAME}`)
    console.log(`\n mongodb connect !! db host % ${conntectionInstance.connection.host}`)
 } catch (error) {
  console.log("MONGODB CONNECTION FEILED",Error)
  process.exit(1)
 }
}


export default connectDB