const mongoose= require("mongoose");

const studentSchema =new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    college:{
      type:String,
      required:true
    },
    year:{
        type:Number,
        required:true
    }

})

const studentModel=mongoose.model('Students',studentSchema)

module.exports=studentModel;