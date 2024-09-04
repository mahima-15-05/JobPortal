import React, { useState } from "react";
import Navbar from "./shared/Navbar";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { Contact, Pen } from "lucide-react";
import { Button } from "./ui/button";
import { Mail } from "lucide-react";
import { Badge } from "./ui/badge";
import AppliedJobsTable from "./AppliedJobsTable";
import UpdateProfileDialogue from "./UpdateProfileDialogue";
const skills = ["Java Core", "React.js", "Node.js", "MySql", "MongoDB", "Sequelize ORM"];



export default function Profile() {
  const isResume=true;
  const [open,setOpen]=useState(false)
  return (
    <div>
      <Navbar />
      <div
        variant="outline"
        size="icon"
        className="max-w-4xl mx-auto justify-center border border-gray-200 bg-white rounded-2xl my-5 p-8"
      >
        <div className="flex justify-between">
          <div className="flex items-center gap-4">
            <Avatar className="">
              <AvatarImage
                className="rounded-full h-24 w-24"
                src="https://wallpapers.com/images/featured/cool-profile-picture-87h46gcobjl5e4xu.jpg"
                alt="profile"
              />
            </Avatar>
            <div className="">
              <h1 className="mt-3 font-medium text-xl text-blue-200">
                Full name
              </h1>
              <p className="mx-auto">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                sunt porro dolorum ipsa
              </p>
            </div>
          </div>
          <Button onClick={()=>setOpen(true)} className="text-right" variant="outline">
            <Pen />
          </Button>
        </div>
        <div className="mt-2">
          <div className="flex items-center gap-3 my-2" >
            <Mail />
            <span>maahi@gmail.com</span>
          </div>
          <div className="flex items-center gap-3 my-2">
            <Contact />
            <span>9078563412</span>
          </div>
        </div>

        {/* Skills */}
        <div className="my-5 ">
          <h1 className="mb-3 font-bold text-md">Skills</h1>
          {/* <hr className="border border-gray-200 shadow mb-4" /> */}
          <div className="flex items-center gap-1">
           {skills.length!=0 ? skills.map((item,index)=><Badge key={index} className=" p-2 bg-blue-200 hover:bg-blue-400">{item}</Badge>) : <span>N/A</span>
           }
          </div>
          
        </div>

        {/* Resume */}
        <div className=" my-5 grid w-full max-w-sm items-center gap-2">
          <label className="text-md font-bold">Resume</label>
          

          {
            isResume? <a className="text-blue-500 hover:underline w-full cursor-pointer" target="_blank" href="#">Resume</a> : <span>N/A</span>
          }


        </div>
        </div>

        {/* Applied JObs */}

        {/* <hr className="w-full border border-gray-200 shadow mb-4" /> */}
        <div className=" my-5 max-w-4xl rounded-2xl bg-white mx-auto">
          
          <h1 className="font-bold my-3 text-medium">Applied Jobs</h1>
          <AppliedJobsTable/>
          {/* Application  Table */}

        </div>
      
      <div>
        <UpdateProfileDialogue open={open} setOpen={setOpen}/>
      </div>
    </div>
  );
}
