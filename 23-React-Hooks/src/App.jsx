import React from 'react'
import { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0);
  const Increment=()=>{
    setCount(prev => prev >= 10 ? 0 : prev + 1);
  }

  const Decrement = () =>{
    setCount(prev => prev <= -5 ? 0 : prev - 1);
  }

  return (
    <div className='p-5 bg-black text-white flex flex-col justify-center items-center h-screen'>
      <h2 className='bg-green-600 px-5 text-xl py-2 w-fit rounded mb-5'>{count}</h2>
      <div className='flex gap-5'>
        <button
          onClick={Decrement}
          className='px-4 py-2 bg-green-800 rounded'
          >
            Decrement
        </button>
        <button 
          onClick={Increment}
          className='px-4 py-2 bg-blue-800 rounded'
          >
            Increment
        </button>
      </div>
    </div>
  )
}

export default App