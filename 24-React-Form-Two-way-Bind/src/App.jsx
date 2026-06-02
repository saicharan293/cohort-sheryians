import React, { useState } from 'react'

const App = () => {

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(username);
    setUsername('')
    
  }
  const [username, setUsername] = useState('');
  return (
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>
        {/* here, without setusername in the onchange, 
          we cannot touch the input. so we are taking React (setusername)
          as the mediator for user and html, leading to two way binding */}
        <input 
          type='text' 
          placeholder='Enter your name'
          value={username}
          onChange={(e)=>{
            setUsername(e.target.value);
          }}
          />
        <button>submit</button>
      </form>
    </div>
  )
}

export default App