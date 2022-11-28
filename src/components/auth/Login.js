import { useState } from "react";
import "./registration.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../App.js";
import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Registration() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const user = React.useContext(UserContext);

  // sign in success toast
  const notify = () => toast("Sign in successful!");

  // sign in unsuccessful toast
  const errorNotify = () => toast("Something went wrong, try again!");

  // Submit button handler
  const submitHandler = (e) => {
    e.preventDefault();
    axios
      // axios makes a POST request to the api endpoint
      .post("https://gluten-free-finder-api.herokuapp.com/auth/signin", {
        email: email,
        password: password,
      })
      .then((response) => {
        // setting the jwt in local storage
        localStorage.setItem("jwt", response.data.jwt);
        user.setJwt(response.data.jwt);
        // redirects the user to the home component on successful login
        navigate("/");
        notify();
      })
      .catch((error) => {
        console.log("login error", error);
        errorNotify();
      });
  };

  return (
    <div className="registration">
      <center>
        <form onSubmit={submitHandler}>
          <h1>Sign In</h1>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            name="password"
            placeholder="Pasword"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Sign In</button>

          <Link to="/registration">Not a user? Link to sign up</Link>

        </form>
      </center>
    </div>
  );
}

export default Registration;
