import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import "./Contact";
import "./ReturnP";
function Footer() {
  return (
    <div class="footer">
      <div class="frow">
        <div class="fcol">
          <p class="fheading">About</p>
          <Link to={"./Contact"} class="fbody">
            Contact US
          </Link>

          <p class="fbody">About</p>
          <Link to={"./ReturnP"} class="fbody">
            Return Policy
          </Link>
          <p class="fbody">Terms and Conditions</p>
          <p class="fbody">Privacy</p>
        </div>
        <div class="fcol">
          <p class="fheading">HELP</p>
          <p class="fbody">Payments</p>
          <p class="fbody">Cancellation and Returns</p>
          <p class="fbody">FAQ</p>
          <p class="fbody">Shipping</p>
        </div>
        <div class="fcol">
          <p class="fheading">SOCIAL</p>
          <p class="fbody">Facebook</p>
          <p class="fbody">Twitter</p>
          <p class="fbody">Instagram</p>
        </div>
        <div class="fcol">
          <p class="fheading">CITIES</p>
          <p class="fbody">New York</p>
          <p class="fbody">Boston</p>
          <p class="fbody">New Jersey</p>
          <p class="fbody">Dallas</p>
          <p class="fbody">Texas</p>
          <p class="fbody">Chicago</p>
        </div>
      </div>
      <div class="fcopyright">© Copyright reserved by SAMS</div>
    </div>
  );
}

export default Footer;
