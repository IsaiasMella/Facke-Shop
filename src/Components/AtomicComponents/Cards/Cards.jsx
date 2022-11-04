import React from "react";
import "./Cards.css";

const Cards = () => {
  return (
    <div className="container__card active__card">
      <img src="https://cdn.shopify.com/s/files/1/0537/9483/2552/products/PythonLat_150x150.png?v=1614389630" alt="" />
      <div className="container__card-text active">
        <div className="card__title active">
          <h4>Titulo Articulo</h4>
          <div className="container__stock active">
            <small>Stock</small>
            <p className="unit">17</p>
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
        <p className="price active"><strong>$3.72</strong></p>
    </div>
  );
};

export default Cards;
