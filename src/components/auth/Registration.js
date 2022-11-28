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
  const [password_confirmation, setPassword_confirmation] = useState("");
  const navigate = useNavigate();
  const user = React.useContext(UserContext);

  // sign up success toast
  const notify = () => toast("Sign up successful!");

  // sign up unsuccessful toast
  const errorNotify = () => toast("Something went wrong, try again!");

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      // axios makes a POST request to the api endpoint
      .post("https://gluten-free-finder-api.herokuapp.com/auth/signin", {
        email: email,
        password: password,
        password_confirmation: password_confirmation,
      })
      .then((response) => {
        // setting the jwt in local storage
        localStorage.setItem("jwt", response.data.jwt);
        // redirects the user to the home component on successful sign up
        user.setJwt(response.data.jwt);
        navigate("/");
        notify();
      })
      .catch((error) => {
        console.log("registration error", error);
        errorNotify();
      });
  };

  return (
    <div className="registration">
      <center>
        <form onSubmit={submitHandler}>
          <h1>Sign Up</h1>
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
          <input
            type="password"
            name="password_confirmation"
            placeholder="Password Confirmation"
            value={password_confirmation}
            onChange={(e) => setPassword_confirmation(e.target.value)}
          />
          <button type="submit">🚀 Sign Up</button>

          <Link to="/login">Already a user? Link to sign in</Link>

        </form>
      </center>
    </div>
  );
}

export default Registration;
