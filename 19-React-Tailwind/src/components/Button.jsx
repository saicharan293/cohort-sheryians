import React from 'react'

const Button = (props) => {
  return (
    <div className='bg-emerald-400 px-4 py-2 rounded m-2 w-fit  font-bold text-lg text-white'>
        {props.text}
    </div>
  )
}

export default Button