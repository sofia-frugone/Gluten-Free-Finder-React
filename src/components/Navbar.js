import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../App.js";
import React from "react";
import jwt_decode from "jwt-decode";

function Navbar() {
  const navigate = useNavigate();
  const user = React.useContext(UserContext);
  const { jwt, setJwt } = user;
  let decoded;

  if (!!jwt) {
    console.log("hello", typeof jwt);
    decoded = jwt_decode(jwt);
  }

  console.log(decoded);

  console.log("user.jwt", user.jwt);

  const logoutHandler = (e) => {
    e.preventDefault();
    localStorage.removeItem("jwt");
    setJwt(null);
    navigate("/");
  };
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/gff-logo.svg" alt="navbar logo" />
      </div>
      <h1>Gluten Free Finder</h1>

      <div className="links">
        <Link to="/">Home</Link>
        {jwt && decoded && decoded.role==="admin" && <Link to="/dashboard">Admin</Link>}
        {jwt && <Link to="/create">Create New Post</Link>}
        {jwt && (
          <Link onClick={logoutHandler} to="/logout">
            Log Out
          </Link>
        )}

        {!jwt && <Link to="/registration">Sign Up</Link>}
        {!jwt && <Link to="/login">Sign In</Link>}
      </div>
    </nav>
  );
}

export default Navbar;
