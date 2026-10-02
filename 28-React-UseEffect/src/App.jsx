import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {

  const [name, setName] = useState('');
  const [num, setNum] = useState(0);

  const getData =async ()=>{
    const response = await axios.get(' https://randomuser.me/api/');
    setName((response.data.results[0].name.first+" "+response.data.results[0].name.last))
  }

  useEffect(function(){
    getData()
  },[num])

  return (
    <div>
      {name}
      <h3>{num}</h3>
      <button onClick={e=>setNum(num+1)}>
        Click
      </button>
    </div>
  )
}

export default App