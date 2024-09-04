import React from 'react'
import Navbar from './shared/Navbar'
import Jobs from './Jobs'
import JobCard from './JobCard'

const randomJobs = [1,2,3,5]
export default function Browse() {
  return (
    <div>
        <Navbar/>
      <div className='max-w-7xl mx-auto my-10 mt-4'>
      <h1 className='font-bold text-lg my-10'>Search Results ({randomJobs.length})</h1>
      <div className='grid grid-cols-3 gap-4'>
        {
        randomJobs.map((item,index)=>{
            return (
                <JobCard/>
            )
        })
      }
      </div>
      
      </div>
    </div>
  )
}
