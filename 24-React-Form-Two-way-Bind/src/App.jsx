import React, { useState } from 'react'

const App = () => {
  function submitHandler(e){
    e.preventDefault()
    console.log('submitted');
    
  }
  return (
    <div className='box'>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>
        <input type="text" placeholder='Enter a name'/>
        <button>submit</button>
      </form>
    </div>
  )
}

export default App