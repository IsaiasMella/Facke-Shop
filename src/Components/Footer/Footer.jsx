import React from 'react'
import GitHub from '../../Icons/RRSS/GitHub'
import Linkedin from '../../Icons/RRSS/Linkedin'
import Mail from '../../Icons/RRSS/Mail'
import LogoFooter from '../../Images/FackeShop.png'
import './Footer.css'

export const Footer = () => {
    return (
        <div className='container__footer'>
            <div className="footer">
                <picture>
                    <img src={LogoFooter} alt="Logo FakeShop" />
                </picture>
                <div className="container__text_footer">
                    <p>
                        Este comercio fue realizado con fines didacticos, <strong>ninguno</strong> de los productos se comercializa
                    </p>
                </div>
                <div className='container__contacto'>
                    <h4 className='name'>Isaias Mella</h4>
                    <div className='container__RRSS'>
                        <a className="RRSS" href='https://www.linkedin.com/in/isaias-mella/' target='_blank'>
                            <Linkedin />
                        </a>
                        <a className="RRSS" href='https://github.com/IsaiasMella?tab=repositories' target='_blank'>
                            <GitHub stroke='#fff' />
                        </a>
                        <div className="RRSS mail">
                            <Mail stroke='#fff' />
                            <tool-tip role='tooltip'>
                                Isaias.mella2013@gmail.com
                            </tool-tip>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}