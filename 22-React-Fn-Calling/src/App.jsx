import React from 'react'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div>
      <Navbar title='Sai Charan' color='green' links={['Home', 'About','Account','Contact']}/>
    </div>
  )
}

export default App