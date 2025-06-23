import mongoose from "mongoose";

const connectDB =async ()=>{

   mongoose.connection.on('connected', ()=>{
    console.log("Data Connected")
   })

    await mongoose.connect(`${process.env.MONGODB_URI}/VisoGenAI`)
}

export default connectDB;