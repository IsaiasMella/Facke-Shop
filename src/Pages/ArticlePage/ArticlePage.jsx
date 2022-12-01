import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Buttons from "../../Components/AtomicComponents/Buttons/Buttons";
import Titles from "../../Components/AtomicComponents/Titles/Titles";
import useFetch from "../../Hooks/useFetch";
import Loader from "../../Icons/Loader/Loader";
import Box from "../../Icons/Box";
import './ArticlePage.css'
import Shield from "../../Icons/Shield";

const ArticlePage = ({ addCart }) => {
  window.scrollTo(0, 0)

  const { id, productName } = useParams()
  const { data, loading } = useFetch(`https://dummyjson.com/products/${id}`)
  const [imgPrincipal, setImgPrincipal] = useState('');

  useEffect(() => {
    setImgPrincipal(data?.images[0])
  }, [data]);

  return (
    <div className="container__article_detail">
      <div className="article_detail">
        <div className="container__article">
          {/* contenedor de TODAS las imagenes */}
          <div className="container__images">
            <div className="container__small_imagenes">
              {loading ? '' :
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
          </div>

          {/* CONTENEDOR DE LA DESCRIPCION */}
          <div className="container__description">
            {
              loading ? '' :
                <>
                  <Titles title='Descripcion' />
                  <p className="description">
                    {data.description
                    }</p>
                </>
            }
          </div>
        </div>

        {/* contenedor donde se ve los detalles de la compra */}
        <div className="container__sale">
          <Titles title={data ? data.title : ''} />

          <h4 className="sale__price">{data ? `$${data.price}` : ''}</h4>

          <div className="container__stok">
            <small className="indicator_stok"><b>Stock disponible</b></small>
            <p>{`Solo quedan ${Math.floor(Math.random() * 10) + 1} unidades`}</p>
          </div>

          <small className="seccion_destacada">En <span>{`12 cuotas de $${((data?.price) / 12).toFixed(2)} sin interes`}</span></small>

          <div className="servicios">
            <div className="envio_gratis">
              <Box stroke='var(--green)' fill='var(--green)' />
              <small>envio gratis</small>
            </div>

            <div className="compra_protegida">
              <Shield stroke='var(--green)' />
              <small>Compra protegida por Facke Shop</small>
            </div>
          </div>

          <div className="sale__button" >
            <Buttons text='Añadir al carrito' action={addCart} id={data?.id} />
          </div>

        </div>
      </div>
    </div>
  );
};

export default ArticlePage;