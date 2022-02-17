import React, { useState } from "react";
import "./signup.css";

const Signup = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    reEnterPassword: ""
  });
  const inputChange = (event) => {
    const {name, value}=event.target;
    setUser({
        ...user,
        [name]:value
    });
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
        <div className="button">Signup</div>
        <div>Or</div>
        <div className="button">Login</div>
      </div>
    </>
  );
};
export default Signup;
