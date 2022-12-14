import React, { useEffect, useState } from 'react'
import Shield from '../../../../Icons/Shield'
import Box from '../../../../Icons/Box'
import './CardsOfCart.css'
import RemoveCart from '../../../../Icons/RemoveCart'
import AddCart from '../../../../Icons/AddCart'

const CardsOfCart = ({ producto, addCart, delFromCart, dataCart }) => {
    let { title, price, quantity } = producto
    let img = producto.images[0]

    const [subTotal, setSubTotal] = useState();

    useEffect(() => {
        setSubTotal(price * quantity)
    }, [quantity]);

    return (
        <div className='container__card_of_cart'>
            <div className='card_of_cart'>
                <img src={img} alt="" />
                <div className="text_of_cart">
                    <h4>{title}</h4>
                    <div className="benefits_of_cart">
                        <div className="envio_gratis">
                            <Box stroke='var(--green)' fill='var(--green)' height={21} width={21} />
                            <small>envio gratis</small>
                        </div>
                        <div className="compra_protegida">
                            <Shield stroke='var(--green)' height={21} width={21} />
                            <small>Compra protegida por Facke Shop</small>
                        </div>
                    </div>
                </div>
                <div className="container__carts">
                    <div className="add_cart" onClick={() => addCart(producto.id)}>
                        <AddCart stroke='var(--black)' />
                    </div>

                    {/* Botton remover articulo */}
                    {
                        dataCart.map(item => {
                            if (item.id === producto.id) {
                                return (
                                    <div className="add_cart" onClick={() => delFromCart(producto.id)}>
                                        <RemoveCart stroke='var(--black)' />
                                    </div>
                                )
                            }
                        })
                    }
                </div>
                <div className="container__quantity">
                    <small>Unidades</small>
                    <p>X {quantity}</p>
                </div>
                <div className='price_of_cart'>
                    <p>$ {subTotal}</p>
                </div>
            </div>
            <hr />
        </div>
    )
}

export default CardsOfCart