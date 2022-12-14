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
import AddCart from "../../Icons/AddCart";
import RemoveCart from "../../Icons/RemoveCart";

const ArticlePage = ({ addCart, delFromCart, dataCart }) => {
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
            <Buttons text='Añadir al carrito' action={addCart} id={data?.id} icon={<AddCart stroke='var(--violet)' clase='in-button' />} />
            <Buttons text='Ya no lo quiero' tipo={`remove_cart ${dataCart.length > 0 ? 'is_active' : 'not_active'}`} action={dataCart.length > 0 ? delFromCart : ''} id={data?.id} icon={<RemoveCart stroke='var(--violet)' clase='in-button' />} />
          </div>

        </div>
      </div>
    </div>
  );
};

export default ArticlePage;