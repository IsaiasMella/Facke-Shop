import React from "react";
import { Link } from "react-router-dom";
import AddCart from "../../../Icons/AddCart";
import RemoveCart from "../../../Icons/RemoveCart";
import "./Cards.css";

const Cards = ({ data, addCart, delFromCart, dataCart }) => {
  let { title, price } = data
  let img = data.images[0]
  let product = data.id

  return (
    <div className="container__card">
      <Link to={`/${title.replace(' ', '-')}/${product}`} className="link">
        <div className="container__img">
          <img src={`${img}`} alt={`${title}`} />
        </div>
        <div className="container__card-text">
          <div className="card__title">
            <h4>{`${title}`}</h4>
            <div className="container__stock">
              {/* <small>Stock</small>
              <p className="unit">{Math.floor(Math.random() * 10) + 1}</p> */}
              {/* <small>Unidades</small> */}
            </div>
          </div>
        </div>
      </Link >
      <div className="container__card-pricing " >
        <p className="price"><strong>{`$ ${price}.00`}</strong></p>
        <div className="container__carts">
          {/* Botton remover articulo */}
          {
            dataCart.map(item => {
              if (item.id === product) {
                return (<div className="add_cart" onClick={() => delFromCart(product)}>
                  <RemoveCart stroke='var(--black)' />
                </div>)
              }
            })
          }
          <div className="add_cart" onClick={() => addCart(product)}>
            <AddCart stroke='var(--black)' />
          </div>

        </div>
      </div>
    </div >
  );
};

export default Cards;
