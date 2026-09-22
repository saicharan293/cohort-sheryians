import React from 'react'
import Card from './components/Card'

const App = () => {

  const cardData = {
    username: "Shiva",
    role: "Creator",
    email: "shiva@gmail.com",
    profileUrl: "https://images.unsplash.com/photo-1789303225087-8307ece66da3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D"
  }
  return (
    <>
      <Card cardData={cardData}/>
    </>
  )
}

export default App