import React from "react";
import Navbar from "./shared/Navbar";
import FilterCards from "./FilterCards";
import JobCard from "./JobCard";

const jobArray = [1, 2, 3, 4, 5, 6, 7, 8,9,10];
export default function Jobs() {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto mt-5">
        <div className="flex gap-5">
          <div className="w-20%">
            <FilterCards/>
          </div>

          {jobArray.lenght <= 0 ? (
            <span>Jobs not found</span>
          ) : (
            <div className="flex-1 h-[88vh] overflow-y-auto pb-5">
              <div className="grid grid-cols-3 gap-4">
                {jobArray.map((item, index) => (
                  <div>
                    <JobCard />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
