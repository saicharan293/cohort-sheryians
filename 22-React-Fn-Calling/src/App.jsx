import React from 'react'
import Navbar from './components/Navbar'
import Men from './components/Men'
import Women from './components/Women'

const App = () => {
  const user1 = {
    name: 'Shiva',
    age: 30,
    gender: 'male'
  }

  const user2 = {
    name: 'Parvati',
    age: 20,
    gender: 'female'
  }

  const user3 = {
    name: 'Nandi',
    age: 10,
    gender: 'male'
  }

  return (
    <div className='bg-black text-white p-5 h-screen'>
      {user2.gender == 'male' ? (user3.age > 10 ? <Men /> : <Women />)  : <Women />}
    </div>
  )
}

export default App