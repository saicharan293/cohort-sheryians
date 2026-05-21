import React from 'react'

const Card = (user) => {
  return (
    <div className='bg-emerald-600 border-2 border-white m-2 text-white rounded px-5 py-3 my-2 h-40 w-40 '>
        <h1 className='text-2xl font-semibold'>{user.name}</h1>
    </div>
  )
}

export default Card