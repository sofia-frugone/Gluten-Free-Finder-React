import { useState } from "react";
import "./registration.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Registration() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      // axios makes a post request to the api endpoint
      .post("http://localhost:3000/auth/signin", {
        email: email,
        password: password,
      })
      .then((response) => {
        console.log("login res", response);
        // setting the jwt in local storage
        localStorage.setItem("jwt", response.data.jwt);
        // redirects the user to the home component on successful login
        navigate("/");
      })
      .catch((error) => {
        console.log("login error", error);
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
        </form>
      </center>
    </div>
  );
}

export default Registration;
