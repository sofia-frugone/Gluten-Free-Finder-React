import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../App";
import React from "react";
//import { useQuery } from "@tanstack/react-query";

function SubmissionForm() {
  // setting initial input states for submission form
  const [restaurant_name, setRestaurant_name] = useState("");
  const [street_number, setStreet_number] = useState("");
  const [street_name, setStreet_name] = useState("");
  const [suburb, setSuburb] = useState("");
  const [postcode, setPostcode] = useState("");
  const [description, setDescription] = useState("");
  const [cuisine_id, setCuisine_id] = useState("");
  const [food_prep_id, setFood_prep_id] = useState("");

  const navigate = useNavigate();
  const user = React.useContext(UserContext);

  const [cuisineList, setCuisineList] = useState([]);
  const [foodPrepList, setFoodPrepList] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      // axios makes a POST request to the api endpoint
      .post(
        "http://localhost:3000/posts",
        {
          restaurant_name: restaurant_name,
          street_name: street_name,
          street_number: street_number,
          suburb: suburb,
          postcode: postcode,
          description: description,
          cuisine_id: cuisine_id,
          food_prep_id: food_prep_id,
        },
        {
          headers: {
            Authorization: localStorage.getItem("jwt"),
          },
        }
      )
      .then((response) => {
        console.log("submission res", response);

        // redirects the user to the home component on successful submission
        navigate("/");
      })
      .catch((error) => {
        console.log("submission error", error);
      });
  };

  // fetch cuisines
  const fetchCuisines = () => {
    axios
      .get("http://localhost:3000/cuisines")
      .then((response) => {
        const { data } = response;
        if (response.status === 200) {
          //check the api call is successful by status code 200
          setCuisineList(data);
          setCuisine_id(data[0].id);
        } else {
          //error handle section
        }
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchCuisines();
  }, []);

  // fetch food prep
  const fetchFoodPrep = () => {
    axios
      .get("http://localhost:3000/food_preps")
      .then((response) => {
        const { data } = response;
        if (response.status === 200) {
          //check the api call is successful by status code 200
          setFoodPrepList(data);
          setFood_prep_id(data[0].id);
        } else {
          //error handle section
        }
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchFoodPrep();
  }, []);

  return (
    <div>
      <center>
        <form onSubmit={submitHandler}>
          <h1>Submission Form</h1>
          <input
            type="text"
            name="restaurant_name"
            placeholder="Restaurant Name"
            value={restaurant_name}
            onChange={(e) => setRestaurant_name(e.target.value)}
          />

          <input
            type="text"
            name="street_number"
            placeholder="Street Number"
            value={street_number}
            onChange={(e) => setStreet_number(e.target.value)}
          />

          <input
            type="text"
            name="street_name"
            placeholder="Street Name"
            value={street_name}
            onChange={(e) => setStreet_name(e.target.value)}
          />

          <input
            type="text"
            name="suburb"
            placeholder="Suburb"
            value={suburb}
            onChange={(e) => setSuburb(e.target.value)}
          />

          <input
            type="number"
            name="postcode"
            placeholder="Postcode"
            value={postcode}
            onChange={(e) => setPostcode(e.target.value)}
          />

          <input
            type="textarea"
            name="description"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <select
            disabled={false}
            value={cuisine_id}
            onChange={(e) => setCuisine_id(e.currentTarget.value)}
          >
            {cuisineList.map((item) => (
              <option key={`cuisine_${item.id}`} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>

          <select
            disabled={false}
            value={food_prep_id}
            onChange={(e) => setFood_prep_id(e.currentTarget.value)}
          >
            {foodPrepList.map((item) => (
              <option key={`food_prep_${item.id}`} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>

          <button type="submit">Submit</button>
        </form>
      </center>
    </div>
  );
}

export default SubmissionForm;
