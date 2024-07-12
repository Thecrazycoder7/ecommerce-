import React, { useState } from 'react'
import { Container } from "@mui/material";
import './SignIn.css'
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [currState, setCurrState] = useState("Login")
  return (
    <div className="container">
      <Link to="/">
        <img src={logo} alt="img" />
      </Link>
      <div className="signin_container">
        <h2>{currState}</h2>
        {currState === "Login" ? (
          <></>
        ) : (
          <div className="input_box">
            <label>Your Name: </label>
            <input type="text" required />
          </div>
        )}
        <div className="input_box">
          <label>Email: </label>
          <input type="text" required />
        </div>
        <div className="input_box">
          <label>Password: </label>
          <input type="text" required />
        </div>
        <button>{currState === "Signin" ? "Create Account" : "Login"}</button>

        {/* Conditional statement for signin and Login */}
        {currState === "Login" ? (
          <p className='condition_statement'>
            Create new Account? <span onClick={()=>setCurrState("Signup")}>Signin</span>
          </p>
        ) : (
          <p className='condition_statement'>
            Already have an account? <span onClick={()=>setCurrState("Login")}>Login</span>
          </p>
        )}
      </div>
    </div>
  );
}

export default SignIn