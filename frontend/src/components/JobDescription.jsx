import React from 'react'
import { Badge } from './ui/badge'
import { Button } from './ui/button'

export default function JobDescription() {
    const isApplied=true
  return (
    <div className='max-w-7xl mx-auto my-10'>
      <h1 className='font-bold text-xl'>Nodejs Developer</h1>
      <div className='flex justify-between'>
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
      <Button disabled={isApplied} className={`rounded-lg ${isApplied?'bg-gray-600 cursor-not-allowed':`bg-blue-200 hover:bg-blue-400 cursor-pointer`}`}>{isApplied? 'Already Applied' :'Apply Now' }</Button>
      </div>

      <h1 className=' border-b-2 border-b-gray-300 font-medium my-4 py-4'>Job Description</h1>

      <div className='my-4'>
        <h1 className='font-bold my-1'>Role: <span className='pl-4 font-normal text-gray-800'>Nodejs Developer</span></h1>
        <h1 className='font-bold my-1'>Location: <span className='pl-4 font-normal text-gray-800'>Noida</span></h1>
        <h1 className='font-bold my-1'>Description: <span className='pl-4 font-normal text-gray-800'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum, consequatur.</span></h1>
        <h1 className='font-bold my-1'>Experience: <span className='pl-4 font-normal text-gray-800'>3+ years</span></h1>
        <h1 className='font-bold my-1'>Salary: <span className='pl-4 font-normal text-gray-800'>4LPA</span></h1>
        <h1 className='font-bold my-1'>Total Applicants: <span className='pl-4 font-normal text-gray-800'>12</span></h1>
        <h1 className='font-bold my-1'>Posted Date: <span className='pl-4 font-normal text-gray-800'>17-08-2024</span></h1>
      </div>
      
      
    </div>
    
  )
}
