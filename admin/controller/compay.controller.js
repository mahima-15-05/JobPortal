import {Company} from "../models/company.model.js"
const registerCompany=async (req,res)=>{
    try {
        const {companyName}=req.body;
        // console.log("companyName : "+companyName)// debugging
        if(!companyName){
            return res.status(400).json({
                message:"Company name is required",
                success:false
            })
        }

        let company = await Company.findOne({name:companyName});
        if(company){
            return res.status(400).json({
                message:"Company is already registered",
                success:true
            })
        }

        company = await Company.create({
            name:companyName,
            userId:req.id
        })

        return res.status(200).json({
            message:"Company registered Successfully",
            company,
            success:true
        })
    } catch (error) {
        console.log("error : "+error);
    }
}

const getCompany = async (req,res)=>{
    const userId = req.id;
    const companies = await Company.find({userId});
    if(!companies){
        return res.status(400).json({
            message:"Companies not found",
            success:false
        })
    }
    return res.status(200).json({
        companies,
        success:true
    })
}

const getCompanyById = async (req,res)=>{
    try {
        const companyId = req.params.id;
        const company = await Company.findById(companyId,{ new: true });
        if(!company){
            return res.status(400).json({
                message:"Company not found",
                success:false
            })
        }
        return res.status(200).json({
            message:"Company found",
            company,
            success:true
        })
    } catch (error) {
        console.log("error : "+error)
    }
}

const updateCompany = async (req,res)=>{
    try {
        const {name, description,website,location} = req.body;
        const file = req.file;
        // cloudinary for files

        // update data
        const updateData={name, description,website,location};
        const company = await Company.findByIdAndUpdate(req.params.id,updateData, {new:true});
        if(!company){
            return res.status(400).json({
                message:"Company not found",
                success:false
            })
        }
        return res.status(200).json({
            message:"Company updated successfully",
            company,
            success:true
        })
    } catch (error) {
        console.log("error : "+error);
        
    }
}

export default {
    getCompany,registerCompany,getCompanyById,updateCompany
}