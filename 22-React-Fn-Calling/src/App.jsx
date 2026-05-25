import React from 'react'

const App = () => {
  const btnClick = (a) =>{
    console.log("number is", a);
  }

  return (
    <div className='bg-black text-white p-5 h-screen'>
      <button 
        onClick={()=>{
          btnClick(10)
        }}
        className='active:scale-95 bg-emerald-900 px-4 py-2 rounded'>
          Click to Download
      </button>
    </div>
  )
}

export default App