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
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
          <Header />
            <Payment /> 
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
        <h1> Welcome to SAMS grocery!</h1>
      </div>
    </Router>
  );
}

export default App;
