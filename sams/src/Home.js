import React from "react";
import "./Home.css";
import Product from "./Product";
import Footer from "./Footer";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://m.media-amazon.com/images/I/71+6X396igL._SX3740_.jpg"
          alt=""
        />
        <div className="home_row">
          <Product
            title="Frito-Lay, (18 Pack)"
            price={11.79}
            image="https://images-na.ssl-images-amazon.com/images/I/81UUOj-aSJL.AC_SL240_.jpg"
            rating={3}
          />
          <Product
            title="Strawberries, 1 lb"
            price={3.99}
            image="https://images-na.ssl-images-amazon.com/images/I/8143FLAy6GL.AC_SL240_.jpg"
            rating={5}
          />
          <Product
            title="Chicken Patties, 26 Oz."
            price={7.19}
            image="https://m.media-amazon.com/images/I/81xPiL7ApkL._SX679_.jpg"
            rating={4}
          />
          <Product
            title="Blueberry Waffle, 9 Oz"
            price={3.49}
            image="https://m.media-amazon.com/images/I/81OqrqQezaL._SX679_.jpg"
            rating={4}
          />
        </div>

        <div className="home_row">
          <Product
            title="Butter and Grape Jelly Sandwiches, 2 Ounces"
            price={3.49}
            image="https://m.media-amazon.com/images/I/91+DPhTIvfL._SX679_.jpg"
            rating={4}
          />
          <Product
            title="Brown Eggs - 18 ct"
            price={6.37}
            image="https://m.media-amazon.com/images/I/61Opqp++pGL._SX679_.jpg"
            rating={4}
          />
          <Product
            title="Rich Milk Chocolate, 8 Count"
            price={6.99}
            image="https://m.media-amazon.com/images/I/816fAOhb++L._SX679_PIbundle-8,TopRight,0,0_AA679SH20_.jpg"
            rating={4}
          />
        </div>

        <div className="home_row">
          <Product
            title="Hostess Cup Cakes, 8 Count"
            price={4.19}
            image="https://m.media-amazon.com/images/I/81nyvg6HV4L._SX679_PIbundle-8,TopRight,0,0_AA679SH20_.jpg"
            rating={4}
          />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
