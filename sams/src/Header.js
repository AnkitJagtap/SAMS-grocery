import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import SearchBox from "./SearchBox";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuth = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <img className="logo.png" src="logo.png" alt="" />
      </Link>

      <div className="header_search">
        <input className="header_searchInput" type="text" />

        {/* <SearchBox
          placeholder="Enter country name ..."
          handleChange={this.handleChange}
        /> */}
        <SearchIcon className=" header_searchIcon" type="search" />
      </div>
      {/* <div class="user_cards">
        <div class="card"></div>
      </div> */}

      <div className="header_nav">
        {/* if no user then redirect to the login page */}
        <Link to={!user && "/login"}>
          <div onClick={handleAuth} className="header_option">
            <span className="header_optionLineOne">Hello Guest</span>
            <span className="header_optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <div className="header_option">
          <span className="header_optionLineOne">Returns</span>
          <span className="header_optionLineTwo">Orders</span>
        </div>
        <div className="header_option">
          <span className="header_optionLineOne">Your</span>
          <span className="header_optionLineTwo">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header_optionBasket">
            <ShoppingBasketIcon />
            <span className="header_optionLineTwoheader_basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
