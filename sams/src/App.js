import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";

import Payment from "./Payment";

import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Contact from "./Contact";
import Footer from "./Footer";
import ReturnP from "./ReturnP";
import Statistic from "./Statistic";
import Orders from "./Orders";

// stripe publishable api key
const promise = loadStripe(
  "pk_test_51KtPcbAgpgrvrkjatkhTL130aDhn7fN7t9CcKzNXybDiYwkVUqG9REanm9dvDY9xyJUKzA7RXmfWACCePp7Gi3SY00rg6Hc7mE"
);

function App() {
  const [{}, dispatch] = useStateValue(); // Datalayer component with connect with the firebase...to store the cookies(not local browsers) or logged users state

  useEffect(() => {
    //will run only once when the app component loads.....(useEffect is like dynamic if stamnt)

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        //if user is logged in - set the user to authUser(from the firebase) and dispatch to the data layer

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //if user logged out - set the user to null and dispatch to the data layer
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    // BEM
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/statistic">
            <Header />
            <Statistic />
          </Route>
          <Route path="/contact">
            <Header />
            <Contact />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route path="/returnp">
            <Header />
            <ReturnP />
          </Route>

          <Route path="/payment">
            <Header />

            {/* surround payment with elements and pass promise = apikey  */}
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
