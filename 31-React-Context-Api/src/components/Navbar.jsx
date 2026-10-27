import React, { useState } from 'react'

const Navbar = (props) => {
  const [newTheme, setNewTheme] = useState('');
  
  return (
    <div className='nav'>
      
      <form onSubmit={(e)=>{
        e.preventDefault();
        setNewTheme('');
        props.changeTheme(newTheme);
      }}>
        <input 
          type="text" 
          placeholder='Enter New theme'
          value={newTheme}
          onChange={e=>setNewTheme(e.target.value)} 
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Navbar