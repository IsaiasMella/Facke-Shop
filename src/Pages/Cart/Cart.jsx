import React, { useEffect, useState } from 'react'
import CardsOfCart from '../../Components/AtomicComponents/Cards/CardsOfCart/CardsOfCart';
import TotalCart from '../../Icons/TotalCart'
import './Cart.css'

const Cart = ({ dataCart, addCart, delFromCart }) => {
  const [totalCart, setTotalCart] = useState(0);

  useEffect(() => {
    let suma = 0

    dataCart.map(product => {
      suma += product.price * product.quantity
      setTotalCart(suma)
    })

    if (dataCart.length === 0) {
      setTotalCart(0)
    }

  }, [dataCart]);

  return (
    <div className='container__cart_page'>
      <div className="cart_page">
        <div className='cart__title'>
          <TotalCart stroke='var(--black)' />
          <h3>
            Este es tu carrito
          </h3>
        </div>
        <hr />
        <div className="cart__detail">
          {
            dataCart.map((producto, index) => {
              return (
                <CardsOfCart
                  key={index}
                  producto={producto}
                  addCart={addCart}
                  delFromCart={delFromCart}
                  dataCart={dataCart}
                />
              )
            })
          }
        </div>
        {totalCart > 0 ?
          <div className='container__total_pricing'>
            <p>TOTAL: </p>
            <p>${totalCart}</p>
          </div>
          : ''}
      </div>
    </div>
  )
}

export default Cart