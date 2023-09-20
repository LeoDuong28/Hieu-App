import React, { useState } from "react";
import logo from "./assets/icon.png";
import Login_Validation from "./LoginValidation";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: [event.target.value],
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(Login_Validation(values));
    if (errors.email === "" && errors.password === "'") {
      axios
        .post("http://localhost:2807/register", values)
        .then((res) => {
          if (res.data === "Success") {
            navigate("/home");
          } else {
            alert("No account existed");
          }
        })
        .catch((err) => console.log(err));
    }
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
        <button className="btn btn-success" /*type="submit"*/ to="/home">
          Log In
        </button>
      </form>
      <Link to="/register" className="link-btn">
        Don't have an account? Register Here!
      </Link>
    </div>
  );
}
