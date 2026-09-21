import React from 'react'

const Card = (props) => {
  return (
    <div key={props.idx} className='lg:w-[22vw] md:w-[30vw]- sm:w-[45vw] bg-white text-black rounded-xl text-center py-6 px-4 flex flex-col items-center'>
        <img 
            src={props.elem.imageUrl} 
            className='h-24 w-24 rounded-full object-cover object-center'
            alt="" />

        <h1 className='text-xl font-semibold my-2'>
            {props.elem.userName}
        </h1>

        <h5 className="text-base text-blue-400 font-semibold my-2">
            {props.elem.userRole}
        </h5>

        <p className='text-xs font-medium leading-tight my-2'>
            {props.elem.description}
        </p>

        <button onClick={()=>props.deleteHandler(props.idx)} className='px-4 py-2 rounded bg-red-500 active:scale-95 text-white cursor-pointer text-sm'>Remove</button>
    </div>
  )
}

export default Card