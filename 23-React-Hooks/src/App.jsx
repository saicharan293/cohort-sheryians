import React, { useState } from 'react'
import Room from '../components/Room'

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
        gender == 'Male' ? setGender('Female') : setGender('Male')
      }}>
        Change Gender
      </button>

      <Room user={gender}/>
      
    </div>
  )
}

export default App