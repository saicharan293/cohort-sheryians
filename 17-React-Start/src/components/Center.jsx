import React from 'react'
import land from "../assets/land.avif"

const Center = () => {
  return (
    <div className='ce'>
        <h3>Unleash Your Inner Champion today. <br /> All In one place</h3>
        <p>join the ultimate tennis experience -- Where passion meets performace, <br /> and every swing brings you closer to victory</p>

        <div className="foot">
            <div className="left">
                <p>Train with real Professionals <br /> Get the results</p>
                <div className="images">
                    <div className="img-div">
                        <img src="https://i.pinimg.com/736x/3a/07/ab/3a07abeeb56703da16f8382eb6d80219.jpg" alt="" />
                    </div>
                    <div className="img-div">
                        <img src="https://i.pinimg.com/736x/0d/5f/54/0d5f54d3e02f541eec0c4677adbe1283.jpg" alt="" />
                    </div>
                    <div className="img-div">
                        <img src="https://i.pinimg.com/736x/cb/c4/3c/cbc43c569c1ab8b5422a7b7da70e861a.jpg" alt="" />
                    </div>
                </div>
            </div>
            <div className="right">
                <a href="">Insta</a>
                <a href="">Facebook</a>
                <a href="">Tiktok</a>
            </div>
        </div>
    </div>
  )
}

export default Center