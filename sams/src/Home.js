import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img className="home_image" src="bg.jpeg" alt="" />
        <b class="popular">Popular picks</b>
        <br></br>
        <i class="fa fa-flash" id="flashh"></i>
        <i class="flash">Delivery by 4.30pm</i>
        <b class="free">Free Delivery on orders $20+</b>
        <div className="home_row">
          <Product
            id="00001"
            title="Frito-Lay, (18 Pack)"
            price={11.79}
            image="https://images-na.ssl-images-amazon.com/images/I/81UUOj-aSJL.AC_SL240_.jpg"
            rating={3}
          />
          <Product
            id="00002"
            title="Strawberries, 1 lb"
            price={3.99}
            image="https://images-na.ssl-images-amazon.com/images/I/8143FLAy6GL.AC_SL240_.jpg"
            rating={5}
          />
          <Product
            id="00003"
            title="Brown Eggs - 18 Count"
            price={6.37}
            image="https://m.media-amazon.com/images/I/61Opqp++pGL._SX679_.jpg"
            rating={4}
          />
          <Product
            id="00004"
            title="Chicken Patties, 26 Oz"
            price={7.19}
            image="https://m.media-amazon.com/images/I/81xPiL7ApkL._SX679_.jpg"
            rating={4}
          />
          <Product
            id="00005"
            title="Roasted Honey Oats"
            price={3.25}
            image="oats.jpeg"
            rating={2}
          />
        </div>
        <br></br>
        <br></br>
        <b class="popular">Craving for a treat?</b>
        <br></br>
        <i class="fa fa-flash" id="flashh"></i>
        <i class="flash">Delivery by 5.00pm</i>
        <b class="free">Free Delivery on orders $35+</b>
        <div className="home_row">
          <Product
            id="00006"
            title="Butter and Grape Jelly Sandwiches, 2 Ounces"
            price={3.49}
            image="https://m.media-amazon.com/images/I/91+DPhTIvfL._SX679_.jpg"
            rating={4}
          />
          <Product
            id="00007"
            title="Blueberry Waffle, 9 Oz"
            price={3.49}
            image="https://m.media-amazon.com/images/I/81OqrqQezaL._SX679_.jpg"
            rating={4}
          />
          <Product
            id="00008"
            title="Rich Milk Chocolate, 8 Count"
            price={6.99}
            image="https://m.media-amazon.com/images/I/816fAOhb++L._SX679_PIbundle-8,TopRight,0,0_AA679SH20_.jpg"
            rating={4}
          />
          <Product
            id="00009"
            title="Hostess Cup Cakes, 8 Count"
            price={4.19}
            image="https://m.media-amazon.com/images/I/81nyvg6HV4L._SX679_PIbundle-8,TopRight,0,0_AA679SH20_.jpg"
            rating={4}
          />
          <Product
            id="00010"
            title="ChocoChip Cookies"
            price={4.49}
            image="cookie.jpeg"
            rating={4}
          />
        </div>

        <br></br>
        <br></br>
        <b class="popular">Organic Produce</b>
        <br></br>
        <i class="fa fa-flash" id="flashh"></i>
        <i class="flash">Delivery by 4.00pm</i>
        <b class="free">Free Delivery on orders $20+</b>
        <div className="home_row">
          <Product
            id="00011"
            title="Vine Tomatoes 3lbs"
            price={4.49}
            image="tomato.jpeg"
            rating={4}
          />
          <Product
            id="00012"
            title="Eggplant - 1 count"
            price={0.99}
            image="eggplant.jpeg"
            rating={3}
          />
          <Product
            id="00013"
            title="Organic Cabbage"
            price={1.99}
            image="Cabbage.jpeg"
            rating={5}
          />

          <Product
            id="00014"
            title="Yellow Onions - 3lbs"
            price={3.45}
            image="Onion.jpeg"
            rating={3}
          />
          <Product
            id="00015"
            title="Capsicum - 3 count"
            price={2.45}
            image="Capsicum.jpeg"
            rating={5}
          />
        </div>

        <br></br>
        <br></br>
        <b class="popular">Reading for tonight?</b>
        <br></br>
        <i class="fa fa-flash" id="flashh"></i>
        <i class="flash">Delivery by 3.30pm</i>
        <b class="free">Free Delivery on orders $35+</b>
        <br></br>
        <b class="freee">Valid ID required at the time of Delivery</b>
        {/* <br></br> <br></br>
        <h3>Drinks</h3> */}
        <div className="home_row">
          <Product
            id="00016"
            title="Soft Drinks"
            price={4.19}
            image="drinks.png"
            rating={4}
          />
          <Product
            id="00017"
            title="Beer-Sam Adams, Crate of 6"
            price={9.19}
            image="Beer.jpeg"
            rating={4}
          />
          <Product
            id="00018"
            title="Absolute Vodka - 750ml"
            price={15.19}
            image="vodka.jpeg"
            rating={4}
          />
          <Product
            id="00019"
            title="Rum-Captain Morgan"
            price={20.19}
            image="Rum.jpeg"
            rating={4}
          />
          <Product
            id="00020"
            title="Prosecco 750ml"
            price={9.19}
            image="wine.jpeg"
            rating={3}
          />
        </div>

        <div className="home_row">
          <Product
            id="00020"
            title="Grey Goose-750ml"
            price={22.19}
            image="Grey.jpeg"
            rating={4}
          />
          <Product
            id="00021"
            title="Henessey vs Cognac- 1.75L"
            price={88.19}
            image="Henessey.jpeg"
            rating={3}
          />
          <Product
            id="00022"
            title="Corona, Crate of 6"
            price={9.49}
            image="corona.jpeg"
            rating={5}
          />
          <Product
            id="00023"
            title="Remy Martin VSOP Cognac - 750ml"
            price={46.19}
            image="Remy.jpeg"
            rating={4}
          />
          <Product
            id="00024"
            title="Grand Marnier Cordon Rogue"
            price={65.99}
            image="Grand.jpeg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
