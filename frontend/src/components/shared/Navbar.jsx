import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import React from "react";
import { Button } from "../ui/button";
import { LogOut, User2 } from "lucide-react";
import {Link} from 'react-router-dom'
import { useSelector } from "react-redux";

export default function Navbar() {
  const {user} = useSelector(store => store.auth)

  return (
    <div className="bg-white">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16">
        {/* div for left part of navbar */}
        
        <div>
        
          <h1 className="text-2xl font-bold">
            Job<span className="text-blue-200">Portal</span>
          </h1>
        </div>

        {/* div for right part of navbar */}
        <div className="flex items-center gap-2">
          <ul className="flex font-medium items-center gap-5">
            
            <li><Link to="/">Home</Link></li>
            
            
            <li><Link to="/jobs">Jobs</Link></li>
            
            <li><Link to="/browse">Browse</Link></li>
            
          </ul>
          {!user ? (
            <div className="flex items-center gap-2">
              <Link to="/login">
                <Button variant="outline">Login</Button>
              </Link>
              <Link to="/signup">
                <Button className="bg-blue-200 hover:bg-blue-400">
                  Sign Up
                </Button>
              </Link>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className="cursor-pointer">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-80 p-4 bg-white shadow-lg rounded-lg border-none">
                <div className="flex gap-4 space-y-2">
                  <Avatar className="cursor-pointer">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                  </Avatar>

                  <div>
                    <h4 className="font-medium">Maahi Tripathi</h4>
                    <p className="text-sm text-muter-foreground">
                      Hi this is me
                    </p>
                  </div>
                </div>
                <div className="flex flex-col text-gray-600 my-2">
                  <div className="flex w-fit items-center gap-2 cursor-pointer">
                    <User2 />
                    <Button variant="link"><Link to="/profile">View Profile</Link></Button>
                  </div>
                  <div className=" flex w-fit items-center gap-2 cursor-pointer">
                    <LogOut />
                    <Button variant="link">Logout</Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>
    </div>
  );
}
