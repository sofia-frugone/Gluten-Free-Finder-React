import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../App.js";
import React from "react";
import jwt_decode from "jwt-decode";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Navbar() {
  const navigate = useNavigate();
  const user = React.useContext(UserContext);
  const { jwt, setJwt } = user;
  let decoded;

  // log out success toast
  const notify = () => toast("Logged out!");

  // decoding jwt to access user role
  if (!!jwt) {
    console.log("hello", typeof jwt);
    decoded = jwt_decode(jwt);
  }

  console.log("user.jwt", user.jwt);

  // clears local storage when a user logouts
  const logoutHandler = (e) => {
    e.preventDefault();
    localStorage.removeItem("jwt");
    setJwt(null);
    navigate("/");
    notify();
  };

  // conditionally render navbar links based on users local storage
  // if user has a jwt show home, create post, logout links
  // if user has no jwt show sign up, sign in, home links
  // if user is logged in as an admin render dashboard link

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/gff-logo.svg" alt="navbar logo" />
      </div>
      <h1>Gluten Free Finder</h1>

      <div className="links">
        <Link to="/">Home</Link>
        {jwt && decoded && decoded.role === "admin" && (
          <Link to="/dashboard">Dashboard</Link>
        )}
        {jwt && <Link to="/create">New Listing</Link>}
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
