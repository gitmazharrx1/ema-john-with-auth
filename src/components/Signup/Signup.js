import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import image from "../../images/google.png";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError("OPPS!! Your two Password Doesn't Match each other.");
      return;
    }
  };

  return (
    <div className="main">
      <div>
        <h1 className="title">Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <p className="form-text">Email</p>
          <input
            onBlur={handleEmail}
            className="form-field"
            type="email"
            name="email"
            id=""
            required
          />
          <p className="form-text">Password</p>
          <input
            onBlur={handlePassword}
            className="form-field"
            type="password"
            name="password"
            id=""
            required
          />
          <p className="form-text">Confirm Password</p>
          <input
            onBlur={handleConfirmPassword}
            className="form-field"
            type="password"
            name="confirm-password"
            id=""
            required
          />
          <p style={{ color: "red" }}>{error}</p>
          <div>
            <input className="login-btn" type="submit" value="Sign Up" />
          </div>
        </form>
        <p>
          Already Have Account?{" "}
          <Link className="link" to="/login">
            Login
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

export default Signup;
