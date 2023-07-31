import React, { useState } from "react";
import logo from "./assets/icon.png";
import Validation from "./LoginValidation";
import { Link } from "react-router-dom";
import Row from "react-dom";

export default function Login() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: [event.target.value],
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));
  };

  return (
    <div className="user-form-container">
      <img className="app-icon" src={logo} alt="Logo" />
      <h1>Login</h1>
      <form action="" className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          onChange={handleInput}
          placeholder="youremail@gmail.com"
          id="email"
          name="email"
        />
        {errors.email && <span className="text-danger"> {errors.email} </span>}

        <label htmlFor="password">Password</label>
        <input
          type="password"
          onChange={handleInput}
          placeholder="Your password???"
          id="password"
          name="password"
        />
        {errors.password && (
          <span className="text-danger"> {errors.password} </span>
        )}

        <button className="btn btn-success" type="submit">
          Log In
        </button>
      </form>
      <Link to="/register" className="link-btn">
        Don't have an account? Register Here!
      </Link>
    </div>
  );
}
