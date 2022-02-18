import React, { useState } from "react";
import "./login.css";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Login = () => {
  // set useHistory method
  const history = useHistory();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const inputChange = (event) => {
    const { name, value } = event.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  // Login button
  const loginButton = () => {
    axios
      .post("http://localhost/login", user)
      .then((res) => alert(res.data.message));
  };
  return (
    <>
      <div className="main-div">
        <h1>Login</h1>
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={inputChange}
          placeholder="Enter your email"
        />
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={inputChange}
          placeholder="Enter your password"
        />
        <div className="button" onClick={loginButton}>
          Login
        </div>
        <div>Or</div>
        <div
          className="button"
          onClick={() => {
            history.push("/signup");
          }}>
          Signup
        </div>
      </div>
    </>
  );
};
export default Login;
