import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import CheckoutProduct from "./CheckoutProduct";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import { useElements, CardElement, useStripe } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";
import axios from "./axios";
import { db } from "./firebase";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const history = useHistory();

  // var necesary for stripe
  const stripe = useStripe();
  const elements = useElements();

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState();
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    // it can have some dependencies and it runs when the component loads, as well as any of the parameters in brackets change
    // generate the special stripe secret which allows us to charge a customer
    // whenever baseket changes we need to get a new secret. We need to tell stripe that it is no longer $50 we are charging
    // but now it could be $30
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        // Stripe expects the total in a currencies subunits... if $10 then 1000cents
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };

    getClientSecret(); // the way to run async function
  }, [basket]);

  // went to the backend, made a payment request for the amount, went back to the frontend, and rendered on the screen
  console.log("THE SECRET IS >>> ", clientSecret);
  console.log("person: ", user);

  // handle card submit
  const handleSubmit = async (event) => {
    // do stripe function
    event.preventDefault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        //paymentIntent = payment confirmation

        console.log("basket", basket);
        console.log("paymentIntent.amount", paymentIntent.amount);
        console.log("paymentIntent.created", paymentIntent.created);

        // db.collection('users');  // it uses NoSQL datastructure
        // going in to users collection, going in to a specific userId, that user's orders, paymentIntent.id (=orderId)
        db.collection("users")
          .doc(user?.uid)
          .collection("orders")
          .doc(paymentIntent.id)
          .set({
            basket: basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });

        setSucceeded(true);
        setError(null);
        setProcessing(false);

        dispatch({
          type: 'EMPTY_BASKET'
        })

        history.replace("/orders");
      });
  };

  const handleChange = (event) => {
    // we listen for changes in CardElement
    // and display any errors that may appear
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (<Link to="/checkout">{basket?.length} items</Link>)
        </h1>

        {/* payment section adress  */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>

          <div className="payment__address">
            <p>{user?.email}</p>
            <p>2524 Flag Staff House</p>
            <p>Accra, Ghana</p>
          </div>
        </div>

        {/* payment section review items  */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>

          <div className="payment__items">
            {/* ruse check out items here again  */}
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
        </div>

        {/* payment section payment method  */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>

          <div className="payment__details">
            {/* stripe stuff  */}

            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => <h3>Order Total: {value}</h3>}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />

                <button disabled={processing || disabled || succeeded}>
                  <sapn>{processing ? <p>Processing</p> : "Buy Now"}</sapn>
                </button>
              </div>

              {/* Error handling */}
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
