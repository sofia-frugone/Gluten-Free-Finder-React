import FormInput from "./FormInputs";
import { useState } from "react";
import "./submission.css";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const SubmissionForm = () => {
  const mutation = useMutation({
    mutationFn: (newPost) => {
      //setting token as the header as we send a POST request
      return axios.post("http://localhost:3000/posts", newPost, {
        headers: {
          Authorization: localStorage.getItem("jwt"),
        },
      });
    },
  });

  const [values, setValues] = useState({
    restaurantName: "",
    streetAddress: "",
    suburb: "",
    state: "",
    postcode: "",
    cuisine: "",
    foodPrep: "",
    description: "",
  });

  const inputs = [
    {
      id: 1,
      name: "restaurantName",
      type: "text",
      placeholder: "Restaurant Name",
      errorMessage: "Field required",
      label: "Restaurant Name",
      required: true,
    },

    {
      id: 2,
      name: "streetAddress",
      type: "text",
      placeholder: "70 Example Street",
      errorMessage: "Field required",
      label: "Street Address",
      required: true,
    },
    {
      id: 3,
      name: "suburb",
      type: "text",
      placeholder: "eg. Coolamon",
      errorMessage: "Field required",
      label: "Suburb",
      required: true,
    },
    {
      id: 4,
      name: "state",
      type: "text",
      placeholder: "State",
      errorMessage: "Field required",
      label: "State",
      required: true,
    },
    {
      id: 5,
      name: "postcode",
      type: "text",
      placeholder: "eg. 2071",
      errorMessage: "Field required",
      label: "Postcode",
      required: true,
    },
    {
      id: 7,
      name: "cuisine",
      type: "text",
      placeholder: "Cuisine",
      label: "Cuisine",
      required: true,
    },

    {
      id: 8,
      name: "foodPrep",
      type: "text",
      placeholder: "How is food prepared in the kitchen?",
      label: "Food Preparation",
      required: true,
    },
    {
      id: 9,
      name: "description",
      type: "textarea",
      placeholder: "Description (max 250 characters)",
      errorMessage: "Field required",
      label: "Description",
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.elements);
    const payload = {
      cuisine: e.target.elements.cuisine.value,
      description: e.target.elements.description.value,
      foodPrep: e.target.elements.foodPrep.value,
      postcode: e.target.elements.postcode.value,
      restaurantName: e.target.elements.restaurantName.value,
      state: e.target.elements.state.value,
      streetAddress: e.target.elements.streetAddress.value,
      suburb: e.target.elements.suburb.value,
    };
    mutation.mutate(payload);
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  console.log(values);

  return (
    <div className="submission">
      {mutation.isError ? (
        <div>An error occurred: {mutation.error.message}</div>
      ) : null}

      {mutation.isSuccess ? <div>Post added!</div> : null}

      <form onSubmit={handleSubmit}>
        <h1>Restaurant Submission Form</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SubmissionForm;
