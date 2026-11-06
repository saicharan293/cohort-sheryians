import React, { createContext, useState } from 'react'

export const ThemeDataContext = createContext(); 

const ThemeContext = (props) => {
    const [themeContext, setThemeContext] = useState('light');
  return (
    <div>
        <ThemeDataContext.Provider value={[themeContext, setThemeContext]} >
            {props.children}
        </ThemeDataContext.Provider>
    </div>
  )
}

export default ThemeContext