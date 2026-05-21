import React from 'react'

const Card = ({job}) => {
  return (
    <div className='h-72 w-60 bg-white shadow-lg rounded-3xl grid grid-rows-[auto_1fr_auto] px-5 py-4'>
        <div className='flex w-full justify-between items-start mb-6'>
            <div className='h-10 w-10 rounded-full overflow-hidden border-2 border-white outline outline-black'>
                <img 
                    src={job.logo}
                    alt=""
                    className='h-full w-full object-cover object-top'
                    />
            </div>
            <div>
                <a className='bg-white px-2 py-1 rounded-lg border border-gray-300 text-sm'>
                    save
                    <i class="ri-bookmark-line pl-1"></i>
                </a>
            </div>
        </div>
        <div className='mb-2'>
            <h6 className='text-sm'>{job.company} <span className='text-[.6rem] text-gray-400'>{job.posted}</span></h6>
            <h4 className='text-sm font-semibold tracking-wide'>{job.role}</h4>
            <div className='flex justify-start gap-2 mt-2'>
                <span className='text-xs font-semibold px-2 py-1 bg-gray-200 rounded-md '>{job.type}</span>
                <span className='text-xs font-semibold px-2 py-1 bg-gray-200 rounded-md '>{job.level}</span>
            </div>
        </div>
        <div className='flex justify-between align-center px-1 py-3 border-t border-gray-300'>
            <div>
                <p className='text-sm'>{job.salary}</p>
                <p className='text-[.6rem]'>{job.location}</p>
            </div>
            <div>
                <p className='text-xs bg-black text-white rounded-md px-3 py-2 '>Apply Now</p>
            </div>
        </div>
    </div>
  )
}

export default Card