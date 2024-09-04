import React from 'react'
import LatestJobCard from './LatestJobCard'

const randomJobs = [
  1,2,3,4,5,6,7,8
]
export default function LatestJobs() {
  return (
    <div className='max-w-7xl mx-auto my-20'>
      <h1 className='text-4xl font-bold'><span className="text-blue-200">Latest & Top</span> Job Openings</h1>

      <div className='grid grid-cols-3 gap-3 my-5'>
      {randomJobs.slice(0,6).map((items,index) => <LatestJobCard/>)}
      </div>

    </div>
  )
}
