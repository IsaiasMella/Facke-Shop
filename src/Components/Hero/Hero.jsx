import React from 'react'
import Buttons from '../AtomicComponents/Buttons/Buttons'
import Logo from '../../Images/FackeShop.png'
import Img_Hero from '../../Images/FakeProducts/Sennheiser.png'
import './Hero.css'

const Hero = () => {

    return (
        <div className='container__hero'>
            <div className="container__hero-text">
                <div className="hero__text">
                    <img src={Logo} alt='FackeShop' />
                </div>
                <div className="container__button-hero">
                    <Buttons text='¡lo quiero ya!' />
                </div>
            </div>

            <picture className="hero__picture" >
                <img src={Img_Hero} alt="principal product" />
            </picture>
        </div>
    )
}

export default Hero