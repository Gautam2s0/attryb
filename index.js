const express=require("express");
require("dotenv").config();
const cors=require("cors");
const { connection } = require("./Configs/db");
const {router} =require("./Router/router");
const { userRouter } = require("./Router/AuthUser");

const app=express();  
 
app.use(cors());
app.use(express.json());


app.get("/",(req,res)=>{
    try{
        res.send("BUYC Home Page")
    }
    catch(err){
        res.send(err.message) 
    }
}) 


app.use("/user",userRouter)
app.use(router)


app.listen(PORT=process.env.PORT,async()=>{
    try{
        await connection
        console.log("connected to DB")
    }
    catch(er){
        console.log(er.message)
    }
    console.log(`server is running on port ${PORT}`)
})