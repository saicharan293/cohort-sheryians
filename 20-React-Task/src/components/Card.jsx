import React from 'react'

const Card = ({user}) => {
  return (
    <div className='h-96 w-80 bg-white shadow-md border-2 border-white rounded-md p-2 gap-2 grid grid-rows-[1fr_auto_1fr] relative'>
        <div className='overflow-hidden rounded-full border-4 border-white w-20 h-20 absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-[45%]'>
            <img src={user.profile} className='w-full h-full object-cover object-top' alt="" />
        </div>
        <div className='grid grid-cols-3 gap-2'>
            {user.posts?.map((post, index) => (
                <div key={index} className='overflow-hidden rounded-lg'>
                    <img
                        src={post}
                        alt=""
                        className='w-full h-full object-cover object-top'
                    />
                </div>
            ))}
        </div>
        <div className='p-2 rounded-md'>
            <div className='text-end h-2'><p className='leading-none text-3xl'>...</p></div>
            <div className='flex flex-col justify-center items-center pt-4'>
                <h4 className='text-md'>{user.name}</h4>
                <h5>{user.username}</h5>
                <p className='text-xs w-44 text-center m-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
        </div>
        <div className='px-4'>

            {/* Small top separator */}
            <div className='w-16 border-t-2 border-gray-400 mx-auto mb-4'></div>

            <div className='flex justify-around items-center'>
                <div>
                    <h5 className='text-center'>{user.media}</h5>
                    <p className='text-sm text-gray-400 font-semibold'>Media</p>
                </div>

                <div>
                    <h5 className='text-center'>{user.followers}</h5>
                    <p className='text-sm text-gray-400 font-semibold'>Followers</p>
                </div>

                <div>
                    <h5 className='text-center'>{user.following}</h5>
                    <p className='text-sm text-gray-400 font-semibold'>Following</p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Card