import React, { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext'

const Footer = () => {
  const [theme, setTheme] = useContext(ThemeDataContext)
  return (
    <div className='foot'>
      <h1>Footer</h1>
      
      <button onClick={()=>{
        if(theme == 'light'){
          setTheme('dark')
        }else{
          setTheme('light')
        }
      }}>
        Change Theme
      </button>
      <br />
      {theme}
    </div>
  )
}

export default Footer