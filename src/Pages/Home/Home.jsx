import React from "react";
import Cards from "../../Components/AtomicComponents/Cards/Cards";
import Intereses from "../../Components/AtomicComponents/Intereses/Intereses";
import Titles from "../../Components/AtomicComponents/Titles/Titles";
import Hero from "../../Components/Hero/Hero";
import useFetch from "../../Hooks/useFetch";
import Hot_Sale from '../../Images/FakeProducts/Hot_Sale.png'
import ArticlePage from "../ArticlePage/ArticlePage";
import "./Home.css";

const Home = () => {
  const { data, loading } = useFetch("https://dummyjson.com/products")
  const category = useFetch("https://dummyjson.com/products/categories")

  return (
    <div>
      <Hero />
      {console.log(category)}
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
      <div className="container__category">
        <Titles title='Tecnología' />
        <div className="container__cards">
          {loading ?
            "loading..."
            :
            data.products.map(data => {
              if (data.category === "smartphones" || data.category === "laptops") {
                return <Cards
                  key={data.id}
                  title={data.title}
                  price={data.price}
                  img={data.images[0]}
                />
              }
            }
            )}
        </div>
      </div>
      <div className="container__category">
      <Titles title='Salud y Belleza' />
        <div className="container__cards">
          {loading ?
            "loading..."
            :
            data.products.map(data => {
              if (data.category === "skincare" || data.category === "womens-bags") {
                return <Cards
                  key={data.id}
                  title={data.title}
                  price={data.price}
                  img={data.images[0]}
                />
              }
            }
            )}
        </div>
      </div>
    </div>
  );
};

export default Home;
