const mongoose =require("mongoose");

async function connectDB(){
    try{
    await mongoose.connect("mongodb+srv://secondyear9298:uXfI9KE9OTefYWIZ@backtobackend.mayct2e.mongodb.net/Bhandary")
    console.log("Database Connected Successfully")
    }
    catch(err){
        console.log("Database Connection failed")
    }
}

module.exports=connectDB;