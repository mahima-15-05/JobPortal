import React from "react";
import { Button } from "./ui/button";
import { Bookmark } from "lucide-react";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { Badge } from "./ui/badge";
// import { Link } from "react-router-dom";
import { Navigate, useNavigate } from "react-router-dom";


export default function JobCard() {
  const navigate = useNavigate()
  const jobId="ghjklbnjmk"
  return (
    <div className="p-5 rounded-md shadow-xl bg-white border border-gray-200">
      <div className="flex items-center justify-between">
        <p className="text-gray-500 text-sm">2 days ago</p>
        <Button className="rounded-full" size="icon" variant="outline">
          <Bookmark />
        </Button>
      </div>

      <div className="flex items-center my-2 gap-2 ">
        <Button className="w-14 h-14" size="icon" variant="outline">
          <Avatar>
            <AvatarImage src="https://t3.ftcdn.net/jpg/05/51/96/56/360_F_551965658_ZURKYbiSoBIpAZEhTUyQ4ec2OqXxU9mN.jpg" />
            {/* <AvatarImage src="https://www.shutterstock.com/image-vector/circle-line-simple-design-logo-600nw-2174926871.jpg" /> */}
          </Avatar>
        </Button>
        <div>
          <h1 className="text-lg font-medium">Company Name</h1>
          <p className="text-sm text-gray-500">India</p>
        </div>
      </div>
      <div>
        <h1 className="text-lg text-blue-400 font-bold my-2">Title</h1>
        <p className="text-sm text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
          eaque. Dolor magni aliquam cupiditate numquam in doloribus
          necessitatibus repudiandae sit reprehenderit animi et odit, rerum
          consectetur dicta accusamus molestias neque?
        </p>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <Badge className="text-[#C63C51] font-bold" variant="ghost">
          9 Positions
        </Badge>
        <Badge className="text-[#800000] font-bold" variant="ghost">
          Part Time
        </Badge>
        <Badge className="text-[#00224D] font-bold" variant="ghost">
          12 LPA
        </Badge>
      </div>

      <div className="my-2 flex items-center gap-4 mt-4">
        <Button variant="outline" onClick={()=> navigate(`/description/${jobId}`)}>Details</Button>
        
        <Button className="bg-blue-200 hover:bg-blue-400">
          Save for later
        </Button>
      </div>
    </div>
  );
}

// ctrl+B -- more space
