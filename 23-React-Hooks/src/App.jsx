import React from 'react'

const App = () => {
  return (
    <div className='parent'>
      <div>
        <input type="radio" name='gender' id='male' />
        <label htmlFor="male"> Male</label>
      </div>
      <div>
        <input type='radio' name='gender' id='female' />
        <label htmlFor="female"> FeMale</label>
      </div>
    </div>
  )
}

export default App