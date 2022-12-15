import React from "react";
import Carrusel from "../../Components/AtomicComponents/Carrusel/Carrusel";
import Intereses from "../../Components/AtomicComponents/Intereses/Intereses";
import Titles from "../../Components/AtomicComponents/Titles/Titles";
import Hero from "../../Components/Hero/Hero";
import Hot_Sale from '../../Images/FakeProducts/Hot_Sale.png'
import "./Home.css";

const Home = ({ data, loading, dataCart, addCart, delFromCart }) => {

  return (
    <div>
      <Hero />
      {/*Seccion Intereses*/}
      {/* <div className="container__intereses-populares">
        <Titles title='Esto te puede Interesar' />
        <div className="container__intereses">
          <Intereses tipo='Ofertas' img={Hot_Sale} />
          <Intereses tipo='Smartphones' img='https://es.directunlocks.com/devices/compressed/iphone14better.png?v=4' />
          <Intereses tipo='Notebooks' img='https://www.venex.com.ar/products_images/1650479563_1640352500_lenovo_v15_g2_itl_ct1_04.png' />
          <Intereses tipo='Hogar' img='https://arizahome.com/wp-content/uploads/2021/08/Mueble-Sofa-Premier.webp' />
          <Intereses tipo='Perfumes' img='https://sumafar.com.ar/wp-content/uploads/2020/08/ROCK-SHAKIRA.png' />
        </div>
      </div> */}

      {/*Seccion Tecnologia*/}
      <Carrusel
        title='Tecnología'
        category={
          {
            category1: 'smartphones',
            category2: 'laptops'
          }
        }
        loading={loading}
        data={data}
        dataCart={dataCart}
        addCart={addCart}
        delFromCart={delFromCart}
      />
      <Carrusel
        title='Belleza y Salud'
        category={
          {
            category1: 'skincare',
            category2: 'womens-bags'
          }
        }
        loading={loading}
        data={data}
        dataCart={dataCart}
        addCart={addCart}
        delFromCart={delFromCart}
      />
    </div>
  );
};

export default Home;
