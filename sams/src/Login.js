import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../src/firebase";

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
        //succesfully logged wtih email and password
        history.push("/");
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

        //if user login is succesfully done then redirect the user to home page
        if (auth) {
          history.push("/"); // for the home page
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png"
        />
      </Link>

      <div className="login__container">
        <h1>Sign in</h1>

        <form>
          <h5>E-mail</h5>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
            type="text"
          />

          <h5>Password</h5>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            type="password"
          />

          <button
            type="submit"
            onClick={signIn}
            className="login__signInButton"
          >
            Sign in
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
          Create your amazon account
        </button>
      </div>
    </div>
  );
}

export default Login;
