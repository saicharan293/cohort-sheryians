import React, { useContext } from 'react'
import { UserDataContext } from '../context/UserContext'

const Navbar = () => {

  const data = useContext(UserDataContext);
  
  return (
    <div className='h-10 w-full bg-emerald-600'>
      <h1>This is navbar {data}</h1>
    </div>
  )
}

export default Navbar