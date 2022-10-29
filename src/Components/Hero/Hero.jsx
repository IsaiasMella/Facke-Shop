import React from 'react'
import Buttons from '../AtomicComponents/Buttons/Buttons'
import './Hero.css'

const Hero = () => {
    return (
        <div className='container__hero'>
            <div className="container__hero-text">
                <div className="hero__text">
                    <h1>Hardware Bahia</h1>
                    <p>algo se me va a ocurrir</p>
                </div>
                <div className="container__button-hero">
                    <Buttons text='¡lo quiero ya!' />
                </div>
            </div>

            <picture className="hero__picture" >
                <img src="https://www.pngmart.com/files/6/Sennheiser-Headphone-PNG-Photo.png" alt="principal product" />
            </picture>
        </div>
    )
}

export default Hero