import React from 'react'

const Room = (props) => {

  return (
    <div className={`room ${props.user}`} >{props.user} ClassRoom</div>
  )
}

export default Room