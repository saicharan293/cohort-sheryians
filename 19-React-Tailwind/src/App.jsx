import React from 'react'
import Card from './components/Card'
import Button from './components/Button'

const App = () => {

  const users = ['Sai','Shiva','Parvati'];
  return (
    <div className='bg-black text-white p-3 h-screen flex'>
      {users.map(function(ele){
        return <Card name={ele}/>
      })}
    </div>
  )
}

export default App