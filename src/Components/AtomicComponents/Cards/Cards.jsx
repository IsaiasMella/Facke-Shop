import React from "react";
import "./Cards.css";

const Cards = ({ title, price, img }) => {
  return (
    <div className="container__card">
      <div className="container__img">
        <img src={`${img}`} alt={`${title}`} />
      </div>
      <div className="container__card-text">
        <div className="card__title">
          <h4>{`${title}`}</h4>
          <div className="container__stock">
            <small>Stock</small>
            <p className="unit">{Math.floor(Math.random() * 10)+1}</p>
            <small>Unidades</small>
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero illum,
          pariatur repellat impedit quasi corporis facere dolorum nulla fuga
          reprehenderit consequatur asperiores nihil expedita provident ratione
          aut eos ducimus adipisci. Esse voluptatum ea voluptas. Expedita itaque
          laudantium error cum ad reiciendis quis, vero cumque corrupti soluta
          ipsa fuga assumenda nulla eveniet ex quia ipsum officia placeat modi
          minima, aspernatur exercitationem?
        </p>
      </div>
      <div className="container__card-pricing " >
        <p className="price"><strong>{`$ ${price}`}</strong></p>
      </div>
    </div>
  );
};

export default Cards;
