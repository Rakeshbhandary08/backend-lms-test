const app=require('./app');
const connectDB = require('./db/database');

app.listen(3500,async ()=>{
     await connectDB()
    console.log("Server is running on port 3500")
})