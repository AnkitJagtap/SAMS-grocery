import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket , user }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        {/* <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="ad"
        /> */}


<div id="demo" class="carousel slide" data-ride="carousel">

  {/* <!-- Indicators --> */}
  <ul class="carousel-indicators">
    <li data-target="#demo" data-slide-to="0" class="active"></li>
    <li data-target="#demo" data-slide-to="1"></li>
    <li data-target="#demo" data-slide-to="2"></li>
  </ul>
  
  {/* <!-- The slideshow --> */}
  <div class="carousel-inner">
    <div class="carousel-item active">
     
    <img
          className="checkout__ad"
          src="https://cdn.filestackcontent.com/Gh0EEz6BQhSRrJGpdSVH"
          alt="ad"
        />
    </div>
    <div class="carousel-item">
    <img
          className="checkout__ad"
          src="https://cdn.filestackcontent.com/JqpTr2kWT8OhWmqTtdep"
          alt="ad"
        />
    </div>
    <div class="carousel-item">
    <img
          className="checkout__ad"
          src="https://cdn.filestackcontent.com/qlS7XURVQtih7loqWzoT"
          alt="ad"
        />
    </div>
  </div>
  
  {/* <!-- Left and right controls --> */}
  <a class="carousel-control-prev" href="#demo" data-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </a>
  <a class="carousel-control-next" href="#demo" data-slide="next">
    <span class="carousel-control-next-icon"></span>
  </a>
</div>

        <div className="checkout__title">
          <h3>Hi, {user?.email}</h3>
          <h1>Your shopping Basket </h1>
        </div>

        {basket.map((item) => (
          <CheckoutProduct
            key={item.index}
            id={item.id}
            title={item.title}
            price={item.price}
            image={item.image}
            rating={item.rating}
          />
        ))}
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
