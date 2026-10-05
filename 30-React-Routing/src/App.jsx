import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Product from './pages/Product'
import Navbar from './components/Navbar'
import Men from './pages/Men'
import RandomAbout from './pages/RandomAbout'
import Courses from './pages/Courses'

const App = () => {
  return (
    <div className='bg-black text-white h-screen'>
      <Navbar />
      <Routes >
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About />} />
        <Route path='/courses' element={<Courses />}/>

        {/* Dynamic Route  */}
        <Route path='/rd/:any' element={<RandomAbout />}/>

        {/* Nested Route  */}
        <Route path='/products' element={<Product />} >
          <Route path='men' element={<Men />} />
        </Route>

      </Routes>
    </div>
  )
}

export default App