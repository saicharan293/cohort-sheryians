import React, { useState } from 'react'

const App = () => {

  const [username, setUsername] = useState('');

  const [allUsers, setAllUsers] = useState([]);
  const [email, setEmail] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    let user = {username, email}
    setAllUsers([...allUsers, user]);
    
    setUsername('');
    setEmail('');
    
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

        <input 
          type='email' 
          placeholder='Enter your email'
          value={email}
          onChange={(e)=>{
            setEmail(e.target.value);
          }}
          />
        <button>submit</button>
      </form>
      {allUsers.map((ele, idx)=>{
        return <div key={idx}>
          <h1>{ele.username}-{ele.email}</h1>
        </div>
      })}
    </div>
  )
}

export default App