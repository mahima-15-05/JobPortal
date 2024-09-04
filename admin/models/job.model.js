import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    requirements:[{
        type:String,
    }],
    salary:{
        type:Number,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    jobType:{
        type:String,
        required:true
    },
    position:{
        type:String,
        requires:true
    },
    experienceLevel:{
        type:Number,
    },
    
    company:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Company',
        requires:true
    },
    created_by:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        requires:true
    },
    application:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Application'
        }
    ]

},{timestamps:true});
export const Job = mongoose.model("Job",jobSchema);