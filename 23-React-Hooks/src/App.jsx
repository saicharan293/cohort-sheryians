import React, { useState } from 'react'

const App = () => {


  const [marks, setMarks] = useState([50, 72, 10, 12, 16]);
  const [status, setStatus] = useState('Pass');

  function graceStudent(){
    console.log('grace given');
    let nmarks = marks.map(function(ele){
      return ele < 33 ? ele+5 : ele;
    })
    
    setMarks(nmarks)
  }


  return (
    <div>
      {marks.map(function(e, idx){
        return <h2 key={idx}>student {idx+1} : {e}({e <33?'Fail':'Pass'})</h2>
      })}

      <button onClick={graceStudent}>Give them grace</button>
    </div>
  )
}

export default App