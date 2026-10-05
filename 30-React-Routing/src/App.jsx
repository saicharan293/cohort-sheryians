import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Product from './pages/Product'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='bg-black text-white h-screen'>
      <Navbar />
      <Routes >
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About />} />
        <Route path='/products' element={<Product />} />
      </Routes>
    </div>
  )
}

export default App