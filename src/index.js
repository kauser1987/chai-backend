// require('dotenv').config({path:'./env'});
import express from "express"
import dotenv from "dotenv"
const app = express()
// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
import connectDB from "./db/index.js";
dotenv.config({
    path:'./.env'
});
connectDB()
.then(()=>{
    app.on("ERROR", (err)=>{
                    console.log("ERROR:", err);
                    throw err
                })
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`server is running at port ${process.env.PORT}`)
    })
})
.catch((error)=>{
    console.log("MONGO DB connection failed !!!", error);
})











































// import express from "express";
// const app=express()
// ;(async()=>{
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("ERROR", (err)=>{
//             console.log("ERROR:", error);
//             throw err
//         })
//         app.listen(process.env.PORT,()=>{
//             console.log(`APP is listening on PORT ${process.env.PORT}`)
//         })
//     } catch (error) {
//       console.error("ERROR: ", error)
//       throw err  
//     }
// })()