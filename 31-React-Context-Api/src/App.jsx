import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AllSection from './components/AllSection'

const App = () => {

  const courseData = {
    courseName : 'Cohort',
    instrutor : 'Sarthak',
    mentor : 'Anu',
    duration: '6 months'
  }

  return (
    <div>
      <Navbar />
      <AllSection courseData = {courseData}/>
      <Footer />
    </div>
  )
}

export default App