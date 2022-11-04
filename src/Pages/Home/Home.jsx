import React from "react";
import Cards from "../../Components/AtomicComponents/Cards/Cards";
import Hero from "../../Components/Hero/Hero";
import ArticlePage from "../ArticlePage/ArticlePage";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Hero />
      <div className="prueba">
        <Cards />
        <Cards />
        <Cards />
      </div>
      {/* <ArticlePage /> */}
    </div>
  );
};

export default Home;
