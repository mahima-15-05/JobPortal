import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config({});
const connectDb = async()=>{
try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Mongo db connected successfully!!!!!!!")
} catch (error) {
    console.log("error : "+error)
}
}
export default connectDb;