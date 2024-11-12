
import dotenv from "dotenv"
import connectDB from "./db/index.js";


dotenv.config({
 path:'./env'
})




connectDB()















/*
import express from "express";


const app=express();





(async()=>{
 try{
await mongoose.connect(`${process.env.MONGODB_URI}/${db_NAME}`)
app.on("error",()=>{
 console.log("ERRR:",error)
 throw error
})


app.listen(process.env.port,()=>{
 console.log(`app is listing on port ${
  process.env.port
 }`)
})
 }
 catch(Error)
 {
console.error("ERROR",error)
throw error
 }
})()
 */