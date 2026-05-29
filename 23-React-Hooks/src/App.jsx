import React, { useState } from 'react'

const App = () => {
  const [gender, setGender] = useState('Male')

  function UpdateGender(){
    if(gender == 'Male'){
      setGender('Female')
    } else {
      setGender('Male')
    }
  }
  return (
    <div className='parent'>
      <h1>{gender}</h1>
      <button onClick={()=>{
        gender == 'Male' ? setGender('FeMale') : setGender('Male')
      }}>
        Change Gender
      </button>
    </div>
  )
}

export default App