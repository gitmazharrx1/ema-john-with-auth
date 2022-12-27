import React from "react";
import { Link } from "react-router-dom";
import image from "../../images/google.png";
import "./Login.css";

const Login = () => {
  return (
    <div className="main">
      <div>
        <h1 className="title">Login</h1>
        <form>
          <p className="form-text">Email</p>
          <input
            className="form-field"
            type="email"
            name="email"
            id=""
            required
          />
          <p className="form-text">Password</p>
          <input
            className="form-field"
            type="password"
            name="password"
            id=""
            required
          />
          <div>
            <input className="login-btn" type="submit" value="Login" />
          </div>
        </form>
        <p>
          New to Ema-john?{" "}
          <Link className="link" to="/signup">
            Create New Account
          </Link>
        </p>
        <hr />
        <button className="google-btn">
          <span className="google">
            <img src={image} alt="" />
            <p>Continue with Google</p>
          </span>
        </button>
      </div>
    </div>
  );
};

export default Login;
