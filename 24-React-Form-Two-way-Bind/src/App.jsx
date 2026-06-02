import React, { useState } from 'react'

const App = () => {

  const [username, setUsername] = useState('');

  const [allUsers, setAllUsers] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setAllUsers([...allUsers, username]);
    
    setUsername('')
    
  }
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
      {allUsers.map((ele, idx)=>{
        return <h1 key={idx}>{ele}</h1>
      })}
    </div>
  )
}

export default App