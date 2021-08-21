import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import { ShoppingBasket } from "@material-ui/icons";
import reducer, { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
function Header() {
  const [{ basket, user }] = useStateValue();
  const login = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <nav className="Header">
      <Link to="/">
        <img
          className="header_logo"
          src="https://i.pinimg.com/originals/47/b7/bd/47b7bdac4285ee24654ca7d68cf06351.png"
          alt="there is s"
        />
      </Link>
      <div className="header_search">
        <input className="header_search_input" type="text" />
        <SearchIcon className="header_search_icon" />
      </div>
      <div className="header_nav">
        <div onClick={login} className="header_option">
          <span className="headerup">
            Hello <br></br>
            {user?.email}
          </span>
          <Link to={!user && "/login"}>
            <span className="headerlow">{user ? "Sign Out" : "sign in"}</span>
          </Link>
        </div>
        <div className="header_option">
          <span className="headerup">Returns</span>
          <span className="headerlow">&Orders</span>
        </div>
        <div className="header_option">
          <span className="headerup">Your</span>
          <span className="headerlow">Prime</span>
        </div>
        <div className="header_basket">
          <Link to="/checkout">
            <ShoppingBasket className="basket"></ShoppingBasket>
          </Link>
          <span className="basket_count">{basket.length}</span>
        </div>
      </div>
    </nav>
  );
}

export default Header;
