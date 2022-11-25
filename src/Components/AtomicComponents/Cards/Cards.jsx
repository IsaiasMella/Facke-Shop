import React from "react";
import { Link } from "react-router-dom";
import AddCart from "../../../Icons/AddCart";
import "./Cards.css";

const Cards = ({ title, price, img, product }) => {
  return (
    <Link to={`/${title.replace(' ', '-')}/${product}`} className="link">
      <div className="container__card">
        <div className="container__img">
          <img src={`${img}`} alt={`${title}`} />
        </div>
        <div className="container__card-text">
          <div className="card__title">
            <h4>{`${title}`}</h4>
            <div className="container__stock">
              <small>Stock</small>
              <p className="unit">{Math.floor(Math.random() * 10) + 1}</p>
              <small>Unidades</small>
            </div>
          </div>
        </div>
        <div className="container__card-pricing " >
          <p className="price"><strong>{`$ ${price}`}</strong></p>
          <div className="add_cart">
            <AddCart stroke='var(--black)' />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Cards;
