import React from 'react'
import logo from '../assets/logo.png'
import './Header.css';
import { Link } from 'react-router-dom';
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Header = () => {
  return (
    <nav className="header">
      <div className="header_container">
        <Link to="/">
          <img className="header_logo" src={logo} alt="img" />
        </Link>

        <div className="header_search">
          <input type="text" className="header_searchinput" />
          <SearchIcon className="search_icons" />
        </div>

        <div className="header_nav">
          <Link className="header_link">
            <div className="header_option">
              <span>Hello User</span>
              <span>Sign In</span>
            </div>
          </Link>
          <Link className="header_link">
            <div className="header_option">
              <span>Return</span>
              <span>& Order</span>
            </div>
          </Link>
          <Link className="header_link">
            <div className="header_option_cart">
              <ShoppingCartIcon />
              <span>0</span>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Header