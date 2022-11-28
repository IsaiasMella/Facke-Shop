import React from "react";
import ButtonArrow from "../../Components/AtomicComponents/Buttons/ButtonsCarrousel/ButtonArrow";
import Cards from "../../Components/AtomicComponents/Cards/Cards";
import Intereses from "../../Components/AtomicComponents/Intereses/Intereses";
import Titles from "../../Components/AtomicComponents/Titles/Titles";
import Hero from "../../Components/Hero/Hero";
import Loader from "../../Icons/Loader/Loader";
import Hot_Sale from '../../Images/FakeProducts/Hot_Sale.png'
import { TYPES } from "../../Reducer/Action";
import "./Home.css";

const Home = ({ data, loading, dispatch,dataCart }) => {

  const addCart = (id) => {
    dispatch({ type: TYPES.ADD_CART, payload: id })
  }
  const delFromCart = () => {

  }
  const clearCart = () => {

  }

  return (
    <div>
      <Hero />
      {/* {console.log(category)} */}
      {/*Seccion Intereses*/}
      <div className="container__intereses-populares">
        <Titles title='Esto te puede Interesar' />
        <div className="container__intereses">
          <Intereses tipo='Ofertas' img={Hot_Sale} />
          <Intereses tipo='Smartphones' img='https://es.directunlocks.com/devices/compressed/iphone14better.png?v=4' />
          <Intereses tipo='Notebooks' img='https://www.venex.com.ar/products_images/1650479563_1640352500_lenovo_v15_g2_itl_ct1_04.png' />
          <Intereses tipo='Hogar' img='https://arizahome.com/wp-content/uploads/2021/08/Mueble-Sofa-Premier.webp' />
          <Intereses tipo='Perfumes' img='https://sumafar.com.ar/wp-content/uploads/2020/08/ROCK-SHAKIRA.png' />
        </div>
      </div>

      {/*Seccion Tecnologia*/}
      <div className="container__category">
        <ButtonArrow tipo='left' />
        <div className="category">
          <Titles title='Tecnología' />
          <div className="container__cards">
            {loading ?
              <Loader />
              :
              data.products.map((data,index) => {
                if (data.category === "smartphones" || data.category === "laptops") {
                  return <Cards
                    key={index}
                    data={data}
                    addCart={addCart}
                    dataCart={dataCart}
                  />
                }
              }
              )}
          </div>
        </div>
        <ButtonArrow tipo='rigth' />
      </div>

      {/*Seccion Belleza y salud*/}
      <div className="container__category">
        <ButtonArrow tipo='left' />
        <div className="category">
          <Titles title='Salud y Belleza' />
          <div className="container__cards">
            {loading ?
              <Loader />
              :
              data.products.map(data => {
                if (data.category === "skincare" || data.category === "womens-bags") {
                  return <Cards
                    key={data.id}
                    data={data}
                  />
                }
              }
              )}
          </div>
        </div>
        <ButtonArrow tipo='rigth' />
      </div>
    </div>
  );
};

export default Home;
