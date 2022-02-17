import React,{useState} from "react";
import "./login.css";

const Login = () => {
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
        <div className="button">Login</div>
        <div>Or</div>
        <div>Signup</div>
      </div>
    </>
  );
};
export default Login;
