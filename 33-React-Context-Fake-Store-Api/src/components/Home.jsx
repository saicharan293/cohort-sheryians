import React from 'react'
import {useNavigate} from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate();
  return (
    <div className='homepage'>
        <nav className="navbar">
            <h2 className="logo">Learn Hub</h2>

            <div className="navLinks">
                <a href="#">Home</a>
                <a href="#features">Features</a>
                <a href="#courses">Courses</a>
            </div>
        </nav>

        <section className="hero">
            <p className="tagline">Learn Build Grow</p>
            <h1>
                Upgrade your skills <br />
                <span>Build Your Future</span>
            </h1>

            <p className="subtitle">Learn Programming, web developement and modern technologies</p>

            <button onClick={()=>navigate('/products')}>Explore Courses</button>
        </section>

        <section className="features" id="features">
            <div className="feature">
                <h3>Quality Courses</h3>
                <p>Learn while doing courses</p>
            </div>
            <div className="feature">
                <h3>Practical Learning</h3>
                <p>Build Real World Projects while Learning</p>
            </div>
            <div className="feature">
                <h3>Grow Faster</h3>
                <p>Improve your skills and carrier.</p>
            </div>
        </section>
        
    </div>
  )
}

export default Home