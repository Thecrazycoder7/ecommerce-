import React, { useContext } from "react";
import logo from "../assets/logo.png";
import "./Header.css";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { ProductContext } from "../context/ProductContext";

const Header = () => {
  const { cartItems } = useContext(ProductContext);

  // Adjusted count to start from 1 if cartItems is not empty
  const count =
    Object.keys(cartItems).length > 0 ? Object.keys(cartItems).length : 0;

  return (
    <nav className="header">
      <div className="header_container">
        <Link to="/">
          <img className="header_logo" src={logo} alt="logo" />
        </Link>

        <div className="header_nav">
          <Link className="header_link" to="/signin">
            <div className="header_option">
              <span>Sign In</span>
            </div>
          </Link>
          <Link className="header_link">
            <div className="header_option">
              <span>Return</span>
              <span>& Orders</span>
            </div>
          </Link>
          <Link to="/cart" className="header_link">
            <div className="header_option_cart">
              <ShoppingCartIcon />
              <span>{count}</span>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
