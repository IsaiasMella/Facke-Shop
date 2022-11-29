import React, { useEffect, useState } from 'react'
import Shield from '../../../../Icons/Shield'
import Box from '../../../../Icons/Box'
import './CardsOfCart.css'

const CardsOfCart = ({ producto }) => {
    let { title, price, quantity } = producto
    let img = producto.images[0]

    const [subTotal, setSubTotal] = useState();

    useEffect(() => {
        console.log(price)
        console.log(quantity)
        setSubTotal(price * quantity)
    }, [quantity]);

    // useEffect(() => {
    //     let suma = 0
    
    //     dataCart.map(product => {
    //       suma += product.price * product.quantity
    //       setTotalCart(suma)
    //     })

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
                <div className="container__quantity">
                    <small>Unidades</small>
                    <p>X {quantity}</p>
                </div>
                <div className='price_of_cart'>
                    <p>$ {subTotal }</p>
                </div>
            </div>
            <hr />
        </div>
    )
}

export default CardsOfCart