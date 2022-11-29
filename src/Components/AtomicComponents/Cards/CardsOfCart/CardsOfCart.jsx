import React from 'react'
import Shield from '../../../../Icons/Shield'
import Box from '../../../../Icons/Box'
import './CardsOfCart.css'

const CardsOfCart = ({ producto }) => {
    console.log(producto)
    let {title,price} = producto
    let img = producto.images[0]

    return (
        <div className='container__card_of_cart'>
            <div className='card_of_cart'>
                <img src={img} alt="" />
                <div className="text_of_cart">
                    <h4>{title}</h4>
                    <div className="benefits_of_cart">
                        <div className="compra_protegida">
                            <Shield stroke='var(--green)' height={21} width={21} />
                            <small>Compra protegida por Facke Shop</small>
                        </div>
                        <div className="envio_gratis">
                            <Box stroke='var(--green)' fill='var(--green)' height={21} width={21} />
                            <small>envio gratis</small>
                        </div>
                    </div>
                </div>
                <div className='price_of_cart'>
                    <p>$ {price}</p>
                </div>
            </div>
            <hr />
        </div>
    )
}

export default CardsOfCart