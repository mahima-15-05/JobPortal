import React from "react";
import { Search } from "lucide-react";
import { Button } from "./ui/button";

export default function HeroSection() {
  return (
    <div className="text-center">
      <div className="flex flex-col gap-5 my-10">
        <span className="mx-auto text-blue-400 font-medium  px-2 py-4 rounded-full bg-gray-100">
          No. 1 Job Hunting Webiste
        </span>
        <h1 className="text-5xl font-bold">
          Search, Apply & <br /> Get Your{" "}
          <span className="text-blue-200">Dream Jobs</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia amet
          odio molestiae expedita. Id illo fugiat numquam repudiandae
          distinctio. Vel alias sunt deleniti facere laborum exercitationem
          harum dolorum assumenda ea.
        </p>
        <div className="flex w-[40%] pl-3 border border-gray-200 shadow-lg items-center gap-4 rounded-full mx-auto pl-3">
          <input
            className="outline-none border-none w-full"
            type="text"
            placeholder="Find your dream jobs"
          />
          <Button className="rounded-r-full bg-blue-200 hover:bg-blue-400">
            <Search className="h-5 w-5 " />
          </Button>
        </div>
      </div>
    </div>
  );
}
