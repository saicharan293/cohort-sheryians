import React, { useState } from 'react'

const App = () => {
  const arr = ['Sai', 'Karthik', 'Dhananjay','Chandan','Abhi'];

  const [num, setNum] = useState(0);
  function ChangeUser(){
    let rd = Math.floor(Math.random()*arr.length);
    setNum(rd)
  }
  return (
    <div>
      <h1> {arr[num]}</h1>
      <button onClick={ChangeUser}>Change User</button>
    </div>
  )
}

export default App