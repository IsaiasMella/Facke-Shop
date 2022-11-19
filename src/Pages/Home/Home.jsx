import React from "react";
import Cards from "../../Components/AtomicComponents/Cards/Cards";
import Hero from "../../Components/Hero/Hero";
import useFetch from "../../Hooks/useFetch";
import ArticlePage from "../ArticlePage/ArticlePage";
import "./Home.css";

const Home = () => {
  const { data, loading } =
    // useFetch("https://fakestoreapi.com/products")
    useFetch("https://dummyjson.com/products")

  return (
    <div>
      <Hero />
      <h2>Prueba</h2>
      <div className="prueba">
        {console.log(data)}
        {loading ?
          "loading..."
          :
          data.products.map(data => {
            return <Cards
              key={data.id}
              title={data.title}
              price={data.price}
              img={data.images[0]}
            />
          }
          )}
        {/* "holis"
        <br />
        } */}
      </div>
      {/* <ArticlePage /> */}
    </div>
  );
};

export default Home;
