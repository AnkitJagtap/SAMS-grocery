import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../src/firebase";
import Subtotal from "./Subtotal";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const signIn = (e) => {
    e.preventDefault();

    // firebase login
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        if (email === "admin123@gmail.com") {
          history.push("/statistic");         
        } else {
          //succesfully logged wtih email and password
          history.push("/");
          alert("Logged in Successfully!!");
        }
      })
      .catch((error) => alert(error.message));
  };
  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //succesfully crated new user with the same email and password
        console.log(auth);
        alert("Login Created Successfully!!");

        //if user login is succesfully done then redirect the user to home page
        if (auth) {
          history.push("/"); // for the home page
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      {/* <Link to="/">
        <img className="login__logo" src="logo.png" />
      </Link> */}
      <br></br>
      <h1>Sign In Page</h1>
      <br></br>
      <br></br>
      <div class="fb">
        <a
          class="nav-link facebook"
          href="https://www.facebook.com/miti.shah.520"
        >
          <i class="fab fa-facebook-square fa-lg"></i>
          &nbsp;<b className="facebook">Continue with facebook</b>
        </a>
      </div>
      <br></br>
      <div class="tweet">
        <a class="twitter" href="https://twitter.com/">
          <i class="fab fa-twitter"></i>
          &nbsp; <b className="twitter">Continue with Twitter</b>
        </a>
      </div>
      <br></br>
      <div class="goog">
        <a
          class="google"
          href="https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?response_type=code&client_id=95925662322-jroo0m34qta6c7f2tkfhadkes4l9rr79.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Flogin.salesforce.com%2Fservices%2Fauthglobalcallback&scope=email%20openid%20profile&state=CAAAAYB0SZ9ZMDAwMDAwMDAwMDAwMDAwAAAA7NMWHHKTcH78_PrgE3VMBo7zOwoxw_sgK6BitkrC9I2F4Xhp6PZOeRmGenpKKpxn1tMUhIKADaZ7tP6UwfeibTj71Snqj58A5qhkdabCvsb9B2k9y4-L6taVsnPAEw2CGUtqTs4PX7KxS6z3MyjL4FS2lntQczRmT7lhC6jPtVv1_LsJkxEb0hBQTNZxbeyxFLykc7wTt-7A38YJALB-aWFVcq19AnHg0u2md_i1mTC8SQ1UpBYacxKk0r5Dv957LGECQQt2Figi_a0fqatNH1OfiXnfKCwHXkLoheF8RZvM1aXpL_MiLj8RpbnETQ7Iwg0jvHwlQMaQjf8c8505U5Zzl8nVVF1bpwNkwJ7SFXVGWpIuzCePQFtK4mXb23xipHaL_ZmdIrS_e3TiEmvS13ubwB4aSuJepCWIykBgdsFHsXl6sf0zbi33iBqpWANi-GJxWcWkkHaSL4aiR5h4WC-9d5YNjPIT_KRQcW3DPzUIDX4_VI67Ghq42pOP_Z2rSO_XSS9dkstmiGWfg_NfD4bHOaeSd7bnLuZ0AiZvK45MUcpEmD_2DFIBEEVgQSQPQSnxNCP9hN9GXpatVIZEczV_s2_YG5i_WCTHWoOB4sbqAKhJQV4ZDkRe1bEG5IG_3A%3D%3D&flowName=GeneralOAuthFlow"
        >
          <i class="fab fa-google"></i>
          &nbsp; <b className="google">Continue with Google</b>
        </a>
      </div>
      <br></br>
      <br></br>
      <b>OR</b>
      <br></br>
      <br></br>
      <div className="login__container">
        <h1>Sign in</h1>

        <form>
          <h5>E-mail</h5>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
            type="text"
            className="email"
          />

          <h5>Password</h5>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            type="password"
            className="email"
          />

          <button
            type="submit"
            onClick={signIn}
            className="login__signInButton"
          >
            <b class="sign">Sign in</b>
          </button>
        </form>

        <p>
          By signing-in you agree to this clones Conditions of Use. Please
          adhere to community guidlines.
        </p>
        <button
          type="submit"
          onClick={register}
          className="login__registerButton"
        >
          Create your SAMS account
        </button>
      </div>
    </div>
  );
  <br></br>;
}

export default Login;
