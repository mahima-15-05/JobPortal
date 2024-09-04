import { Application } from "../models/application.model.js";
import { Job } from "../models/job.model.js";
const applyJob = async (req, res) => {
  try {
    const userId = req.id;
    // console.log("User id ",userId)
    const jobId = req.params.id;
    // console.log("job id ",jobId)

    if (!jobId) {
      return res.status(400).json({
        message: "jobId is required",
        success: false,
      });
    }
    // console.log("1Come to apply")

    const existingApplication = await Application.findOne({
      job: jobId,
      applicant: userId,
    });
 
    if (existingApplication) {
      return res.status(400).json({
        message: "You have already applied to this job",
        success: false,
      });
    }
    //  console.log("Come to apply")
    // check if the job exists
    const job = await Job.findById(jobId);
    if (!job) {
      return res.status(400).json({
        message: "Job not found",
        success: false,
      });
    }
    // console.log("JOB",job)
    // if job exists
    const newApplication = await Application.create({
      job: jobId,
      applicant:userId,

    });
    job.application.push(newApplication._id);
    await job.save();
    return res.status(200).json({
      message:"Job applied successfully",
      success:true
    })
  } catch (error) {
    console.log("error : " + error);
  }
};

const getAppliedJobs = async (req,res)=>{
  try {
    const userId = req.id;
    const appliedJobs = await Application.find({applicant:userId}).sort({createdAt:-1}).populate({
      path:'job',
      options:{sort:{createdAt:-1}},
      populate:{
        path:'company',
        options:{sort:{createdAt:-1}}

        
      }
    });
    console.log("Applied : ",appliedJobs)
    // console.log("ENtered")
    if(!appliedJobs){
      return res.status(400).json({
        message:"No applications",
        success:false

      })

    }
   
    return res.status(200).json({
      appliedJobs,
      success:true
    })
  } catch (error) {
    console.log("error : "+error)
    
  }
};

const getApplicants = async (req,res)=>{
  try {
    const jobId = req.params.id;
    const job = await Job.findById(jobId).populate({
      path:"application",
      option:{sort:{createdAt:-1}},
      populate:{
        path:'applicant'
      }
    })

    if(!job){
      return res.status(400).json({
        message:"Job not found",
        success:false
      })
    }

    return res.status(200).json({
      success:true,
      job

    })
    
  } catch (error) {
    console.log("error : "+error);
  }
};

const updateStatus = async (req,res)=>{
  try {
    const {status}= req.body;
    const applicationId  = req.params.id;
    if(!status){
      return res.status(400).json({
        message:"Status is required",
        success:false
      })
    }

    const application = await Application.findOne({_id:applicationId})
    if(!application){
      return res.status(400).json({
        message:"Application not found",
        success:false
      })
    }
    application.status = status.toLowerCase();
    await application.save()
    return res.status(200).json({
      application,
      message:"Status updated successfully",
      success:true
    })
  } catch (error) {
    
  }
}
export default { applyJob,getAppliedJobs,getApplicants, updateStatus };
