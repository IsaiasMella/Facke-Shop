import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Buttons from "../../Components/AtomicComponents/Buttons/Buttons";
import Titles from "../../Components/AtomicComponents/Titles/Titles";
import useFetch from "../../Hooks/useFetch";
import Loader from "../../Icons/Loader/Loader";
import Box from "../../Icons/Box";
import './ArticlePage.css'

const ArticlePage = () => {
  window.scrollTo(0, 0)

  let { id, productName } = useParams()
  const { data, loading } = useFetch(`https://dummyjson.com/products/${id}`)
  const [imgPrincipal, setImgPrincipal] = useState('');

  useEffect(() => {
    setImgPrincipal(data?.images[0])
  }, [data]);

  console.log(data)

  return (
    <div className="container__article_detail">
      <div className="article_detail">

        {/* contenedor de TODAS las imagenes */}
        <div className="container__images">
          <div className="container__small_imagenes">
            {loading ? <Loader /> :
              data.images.map(img =>
                <div onMouseOver={() => setImgPrincipal(img)} key={img} className="container__individual_image">
                  <img src={img} alt={productName} />
                </div>
              )}
          </div>

          {/* CONTENEDOR DE LA IMAGEN PRINCIPAL */}
          <div className="img__principal">
            {loading ? <Loader /> : <img src={imgPrincipal} alt="" />}
          </div>
          <div className="container__description">
            <Titles title='Descripcion' />
            <p className="description">
              {loading ? <Loader /> : data.description}
            </p>
          </div>
        </div>

        {/* contenedor donde se ve los detalles de la compra */}
        <div className="container__sale">
          <Titles title={data ? data.title : ''} />
          <h4>{data ? `$${data.price*100}` : ''}</h4>
          <small>{`En 12 cuotas de $${((data?.price) / 12).toFixed(2)} sin interes`}</small>
          <small><b>Stock disponible</b></small>
          <p>{`Solo quedan ${Math.floor(Math.random() * 10) + 1}`}</p>
          <Box stroke='var(--black)' />
          <small>envio gratis</small>
          <Buttons text='Añadir al carrito' />
          <small>Compra protegida por Facke Shop</small>
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;