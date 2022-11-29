import React, { useEffect, useState } from 'react'
import CardsOfCart from '../../Components/AtomicComponents/Cards/CardsOfCart/CardsOfCart';
import TotalCart from '../../Icons/TotalCart'
import './Cart.css'

const Cart = ({ dataCart }) => {
  const [totalCart, setTotalCart] = useState(0);

  useEffect(() => {
    let suma = 0

    dataCart.map(product => {
      suma += product.price * product.quantity
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
            dataCart.map((producto, index) => {
              return (
                <CardsOfCart key={index} producto={producto} />
              )
            })
          }
        </div>
        <div className='container__total_pricing'>
          <p>TOTAL: ${totalCart}</p>
        </div>
      </div>
    </div>
  )
}

export default Cart