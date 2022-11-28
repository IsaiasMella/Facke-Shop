import React, { useEffect, useState } from 'react'
import TotalCart from '../../Icons/TotalCart'

const Cart = ({ dataCart }) => {
  const [totalCart, setTotalCart] = useState(0);

  useEffect(() => {
    let suma = 0

    dataCart.map(product => {
      suma +=  product.price
      setTotalCart(suma)
    })

  }, [dataCart.length]);

  return (
    <div className='container__cart_page'>
      <div className="cart_page">
        <div className='cart__title'>
          <h3>
            <TotalCart stroke='var(--black)' />
            Este es tu carrito
          </h3>
        </div>
        <hr />
        <div className="cart__detail">
          {
            dataCart.map(producto => {
              return (
                <p>una targeta {producto.title}</p>
              )
            })
          }
        </div>
        <div className='container__total_pricing'>
          <p>{totalCart}</p>
        </div>
      </div>
    </div>
  )
}

export default Cart