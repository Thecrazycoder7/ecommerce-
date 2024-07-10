import React from 'react'
import { Container } from "@mui/material";
import './SignIn.css'
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className='container'>
      <div className="signin_container">
        <Link to="/">
          <img src={logo} alt="img" />
        </Link>
        <div className="input_box">
          <label>Name: </label>
          <input type="text" />
        </div>
        <div className="input_box">
          <label>Email: </label>
          <input type="text" />
        </div>
        <div className="input_box">
          <label>Password: </label>
          <input type="text" />
        </div>
        <button>Sign in</button>
      </div>
    </div>
  );
}

export default SignIn