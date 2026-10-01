import React, { useEffect, useState } from 'react'
import axios from 'axios'
import User from './components/User'

const App = () => {
  const [allData, setAllData] = useState([])
  async function getData (){
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    setAllData(response.data);
  }

  useEffect(()=>{
    getData()
  },[])
  return (
    <div>
      {/* <button onClick={getData}>
        Get Data
      </button> */}

      <div className="all-cards">
        {allData.map(function(e, i){
          return <div key={i}>
            <User elem={e}/>
          </div>
        })}
      </div>
    </div>
  )
}

export default App