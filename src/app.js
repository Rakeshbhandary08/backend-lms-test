const express=require("express");
const router = require("./routes/student.route");



const app=express();
app.use(express.json()) //middleware

app.use("/student",router)


module.exports=app;