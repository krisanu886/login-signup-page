import React from "react";
import "./homepage.css";

const Homepage = () => {
    const logoutButton=()=>{}
  return (
    <>
      <div className="main-div">
        <h1>Home page</h1>
        <h1>name</h1>
        <div className="button" onClick={logoutButton}>Logout</div>
      </div>
    </>
  );
};
export default Homepage;
