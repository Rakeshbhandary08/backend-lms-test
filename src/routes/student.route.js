const express=require("express")
const createStudent=require("../controller/student.controller")


const router=express.Router()


router.post("/create",createStudent)

module.exports=router;