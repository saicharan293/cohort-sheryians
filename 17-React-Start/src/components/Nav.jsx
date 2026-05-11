import React from 'react'

const Nav = () => {
  return (
    <section className='nav'>
        <div className="left">
            <h2>React Space</h2>
        </div>
        <div className="middle">
            <a href="" className='about'>About us</a>
            <a href="">Services</a>
            <a href="">Coaches</a>
            <a href="">Events</a>
            <a href="">Contacts</a>
        </div>
        <div className="right">
            <button> Book Now </button>
        </div>
    </section>
  )
}

export default Nav