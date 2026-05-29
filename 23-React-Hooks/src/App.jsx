import React, { useState } from 'react'

const App = () => {
  const arr = ['Sai', 'Karthik', 'Dhananjay','Chandan','Abhi'];

  const [num, setNum] = useState(0);
  function ChangeUser(){
    if(num < arr.length-1) setNum(num+1);
    else setNum(0)
  }
  return (
    <div>
      <h1> {arr[num]}</h1>
      <button onClick={ChangeUser}>Change User</button>
    </div>
  )
}

export default App