import { useNavigate, useParams } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import jwt_decode from "jwt-decode";
import React from "react";
import "./cardoverview.css";
import { UserContext } from "../../App";

const CardDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const user = React.useContext(UserContext);
  const { jwt } = user;
  let decoded;

  // decoding jwt to access user role
  if (!!jwt) {
    console.log("hello", typeof jwt);
    decoded = jwt_decode(jwt);
  }

  console.log(decoded);

  console.log("user.jwt", user.jwt);

  // display posts on admin dahsboard
  const { isLoading, error, data } = useQuery({
    queryKey: ["repoIndividualData"],
    queryFn: () =>
      axios.get(`http://localhost:3000/posts/${id}`).then((res) => {
        return res.data;
      }),
  });

  //handle delete
  const headers = {
    Authorization: localStorage.getItem("jwt"),
  };
  const handleDelete = (e) => {
    e.preventDefault();
    axios
      .delete(`http://localhost:3000/posts/${id}`, { headers })
      .then((response) => {
        navigate("/dashboard");
      })
      .catch((error) => {
        console.log("delete error", error);
      });
  };

  //handle approve
  const mutation = useMutation({
    mutationFn: (approvePost) => {
      //setting token as the header as we send a POST request
      return axios.put(`http://localhost:3000/posts/${id}`, approvePost, {
        headers: {
          Authorization: localStorage.getItem("jwt"),
        },
      });
    },
  });

  const handleApprove = (e) => {
    e.preventDefault();
    console.log(e.target.elements);
    const payload = {
      live_status: true,
    };
    mutation.mutate(payload);
    navigate("/dashboard");
  };

  const handleHome = () => {
    navigate("/");
  };

  // if user is an admin render approve and deny buttons
  // if user is a user render back to home button

  return (
    <center>
      <div className="card-details">
        {error && <div>{error}</div>}
        {isLoading && <div className="loading">Loading...</div>}
        {data && !isLoading && (
          <div className="card-content">
            <img src="../placeholder.png" alt="placeholder" />
            <h3>{data.restaurant_name}</h3>
            <p>{data.description}</p>

            <h2>Overview</h2>
            <p>
              {data.street_number} {data.street_name} {data.suburb}{" "}
              {data.postcode}
            </p>
            <p>{data.cuisine}</p>
            <p>{data.food_prep}</p>

            {jwt && decoded && decoded.role === "admin" && (
              <button onClick={handleApprove} className="approve">
                Approve
              </button>
            )}
            {jwt && decoded && decoded.role === "admin" && (
              <button onClick={handleDelete} className="deny">
                Deny
              </button>
            )}
            {jwt && decoded && decoded.role === "user" && (
              <button onClick={handleHome} className="home">
                Back to Home
              </button>
            )}
          </div>
        )}
      </div>
    </center>
  );
};

export default CardDetails;
