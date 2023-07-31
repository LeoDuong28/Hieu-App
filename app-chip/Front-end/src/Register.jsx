import React, { useState } from "react";
import logo from "./assets/icon.png";
import { Link } from "react-router-dom";
import Validation from "./RegisterValidation";

export default function Register() {
  const [values, setValues] = useState({
    email: "",
    username: "",
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
      <h1>Register</h1>
      <form action="" className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="username"
          onChange={handleInput}
          placeholder="Your Username"
          id="username"
          name="username"
        />
        {errors.username && (
          <span className="errors-text"> {errors.username} </span>
        )}

        <label htmlFor="email">Email</label>
        <input
          type="email"
          onChange={handleInput}
          placeholder="youremail@gmail.com"
          id="email"
          name="email"
        />
        {errors.email && <span className="errors-text"> {errors.email} </span>}

        <label htmlFor="password">Password</label>
        <input
          type="password"
          onChange={handleInput}
          placeholder="Your password???"
          id="password"
          name="password"
        />
        {errors.password && (
          <span className="errors-text"> {errors.password} </span>
        )}

        <button type="submit" className="btn btn-success">
          Sign up
        </button>
      </form>
      <Link to="/" className="link-btn">
        Already have an account? Login Here!
      </Link>
    </div>
  );
}
