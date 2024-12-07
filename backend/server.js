const express=require("express");
const mongoose=require("mongoose")
const db=require("./db")
require("dotenv").config()
const app=express();
db();
app.listen(3000,()=>{
    console.log("server connected")
})