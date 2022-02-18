import React, { useState } from "react";
import "./signup.css";
import axios from "axios";

const Signup = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    reEnterPassword: "",
  });
  const inputChange = (event) => {
    const { name, value } = event.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  // signup button
  const signupButton = () => {
    const { name, email, password, reEnterPassword } = user;
    if (name && email && password && (password === reEnterPassword)) {
      axios.post("http://localhost/signup", user);
    } else {
      alert("Invalid Input");
    }
  };
  return (
    <>
      <div className="main-div">
        <h1>Signup</h1>
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={inputChange}
          placeholder="Enter your Name"
        />
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={inputChange}
          placeholder="Enter your email-id"
        />
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={inputChange}
          placeholder="Enter your password"
        />
        <input
          type="password"
          name="reEnterPassword"
          value={user.reEnterPassword}
          onChange={inputChange}
          placeholder="Re-enter your password"
        />
        <div className="button" onClick={signupButton}>
          Signup
        </div>
        <div>Or</div>
        <div className="button">Login</div>
      </div>
    </>
  );
};
export default Signup;
