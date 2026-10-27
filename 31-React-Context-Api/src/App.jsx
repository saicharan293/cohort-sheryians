import React, { useState } from 'react'
import Navbar from './components/Navbar'

const App = () => {
  const [Theme, setTheme] = useState('');
  
  const changeTheme =(th)=>{
    setTheme(th);
  }
  return (
    <div>
      Theme is {Theme}
      <Navbar changeTheme={changeTheme}/>
    </div>
  )
}

export default App