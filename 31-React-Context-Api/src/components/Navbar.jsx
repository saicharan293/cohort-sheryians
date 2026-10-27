import React, { useState } from 'react'

const Navbar = (props) => {

  const [newTheme, setNewTheme] = useState('')

  return (
    <div className='nav'>
    <form onSubmit={
        (e) =>{
          e.preventDefault()
          props.changeTheme(newTheme);
          setNewTheme('')
          
        } 
        }>
        <input type="text" placeholder='Enter theme' value={newTheme} onChange={e=>setNewTheme(e.target.value)} />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Navbar