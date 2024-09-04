import React from 'react'
import { Badge } from "@/components/ui/badge"

export default function LatestJobCard() {
  return (
    <div className='p-5 rounded-md shadow-xl bg-white border border-gray-100 cursor-pointer'>
       <div>
        <h1 className='text-lg font-medium'>Company Name</h1>
        <p className='text-sm text-gray-500'>India</p>
       </div>
       <div>
        <h1 className='font-bold text-lgmy-2'>Job Title</h1>
        <p className='text-sm text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui, doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, voluptatibus.</p>
        <div className='flex items-center gap-2 mt-4'>
        <Badge className='text-[#C63C51] font-bold' variant="ghost">9 Positions</Badge>
        <Badge className='text-[#800000] font-bold' variant="ghost">Part Time</Badge>
        <Badge className='text-[#00224D] font-bold' variant="ghost">12 LPA</Badge>
        </div>
        
       </div>
    </div>
  )
}
