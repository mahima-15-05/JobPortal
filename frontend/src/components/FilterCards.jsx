import React from "react";
import { RadioGroup, RadioGroupItem } from "@radix-ui/react-radio-group";
// import { Label } from '../components/ui'; // Adjust the path as needed

const filterData = [
  {
    filterType: "Location",
    array: ["Delhi NCR", "Hydrabad", "Mumbai", "Bangalore", "Gurugram"],
  },
  {
    filterType: "Industry",
    array: [
      "Frontend Developer",
      "Backend Developer",
      "Fullstack Developer",
      "Java Developer",
      "Python Developer",
    ],
  },
  {
    filterType: "Salary",
    array: ["0-40k", "40k-1lakh", "1lakh-5lakh"],
  },
];

export default function FilterCards() {
  return (
    <div className="bg-white p-3 w-full rounded-md">
      <h1 className="font-bold text-lg">Filter Jobs</h1>
      <hr className="mt-3" />

      <RadioGroup>
        {filterData.map((data, index) => (
          <div>
            <h1 className="font-bold text-lg">{data.filterType}</h1>
            {data.array.map((item, index) => {
              return (
                <div className="flex items-center space-x-2 my-2">
                  <input
                    type="radio"
                    value={item}
                    id={`${data.filterType}-${item}`} // Unique id for each radio button
                    name={data.filterType}
                  />

                  <label className="ml-2">
                    {item}
                  </label>
                </div>
              );
            })}
          </div>
        ))}
      </RadioGroup>
    </div>
  );
}
