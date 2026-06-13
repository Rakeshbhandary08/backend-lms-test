const studentModel = require("../model/db.model");

async function createStudent(req,res){
  const {name,college,year}=req.body;

  const data=await studentModel.findOne({name,college,year})

  if(data){
    return res.status(200).json({message:"Student is already present"})
  }

  const studentDetail=await studentModel.create({
    name,
    college,
    year
  })

  return res.status(201).json({message:"Student created Successfully",StudentDetails :studentDetail})


}

module.exports=createStudent;
