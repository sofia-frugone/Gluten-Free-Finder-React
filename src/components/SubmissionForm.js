import FormInput from '../components/FormInputs'
import { useState } from "react";

const SubmissionForm = () => {
    const [values, setValues] = useState({
        restaurantName: "",
        streetAddress: "",
        suburb:"",
        state:"",
        postcode:"",
        cuisine:"",
        foodPrep:"",
        description:"",
      });
    
      const inputs = [
        {
          id:1,
          name:"restaurantName",
          type:"text",
          placeholder:"Restaurant Name",
          errorMessage: "Field required",
          label:"Restaurant Name",
          required: true,
        },

        {
            id:2,
            name:"streetAddress",
            type:"text",
            placeholder:"70 Example Street",
            errorMessage: "Field required",
            label:"Street Address",
            required: true,
        },
        {
            id:3,
            name:"suburb",
            type:"text",
            placeholder:"eg. Coolamon",
            errorMessage: "Field required",
            label:"Suburb",
            required: true,
        },
        {
            id:4,
            name:"state",
            type:"text",
            placeholder:"State",
            errorMessage: "Field required",
            label:"State",
            required: true,
        },
        {
            id:5,
            name:"postcode",
            type:"text",
            placeholder:"eg. 2071",
            errorMessage: "Field required",
            label:"Postcode",
            required: true,
        },
        {
            id:7,
            name:"cuisine",
            type:"text",
            placeholder:"Cuisine",
            label:"Cuisine",
            required: true,
        },
    
        {
            id:8,
            name:"foodPrep",
            type:"text",
            placeholder:"How is food prepared in the kitchen?",
            label:"Food Preparation",
            required: true,
        },
        {
            id:9,
            name:"description",
            type:"textarea",
            placeholder:"Description (max 250 characters)",
            errorMessage: "Field required",
            label:"Description",
            required: true,
        },
      
      
    
        
        
      ]
      
      const handleSubmit = (e) => {
        e.preventDefault();
      }
    
      const onChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value});
      };
    
      console.log(values);

    return (  
        <div className="formInputs">
               <form onSubmit={handleSubmit}>
                 <h1>Restaurant Submission Form</h1>
                 {inputs.map((input) => (
                   <FormInput className="inputs" key={input.id} {...input} value={values[input.name]} onChange={onChange}/>
                  ))}
                  <label> File upload (Upload any supporting documents JPG, PNG, PDF files accepted)
                     <input type="file" />
                  </label>
                  
                  <input className="submit" type="submit" />
               </form>
             </div>

    );
}
 
export default SubmissionForm;