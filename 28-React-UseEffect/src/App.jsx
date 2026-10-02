import React, { useEffect, useState } from 'react'

const App = () => {
  
  const [count, setCount] = useState(0);

  const [title, settitle] = useState('');

  useEffect(()=>{
    console.log("use effect when title change");
    
  },[title]);

  return (
    <div>
      <input placeholder='enter the input' value={title} onChange={(e)=>settitle(e.target.value)}/>
      <h3>{count}</h3>
      <button onClick={(e)=>setCount(count+1)}>Count</button>
    </div>
  )
}

export default App