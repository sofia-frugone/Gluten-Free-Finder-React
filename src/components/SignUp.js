import FormInput from '../components/FormInputs'
import { useState } from "react";
import { Link } from 'react-router-dom'

const SignUp = () => {
    const [values, setValues] = useState({
        email: "",
        password: "",
        confirmPassword:"",
      });
    
      const inputs = [
        {
          id:1,
          name:"email",
          type:"text",
          placeholder:"Email*",
          errorMessage: "It should be a valid email address",
          label:"Email",
          required: true,
        },
    
        {
          id:2,
          name:"password",
          type:"password",
          placeholder:"Password*",
          errorMessage: "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character",
          label:"Password",
          pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
          required: true,
        },
    
        {
          id:3,
          name:"confirmPassword",
          type:"password",
          placeholder:"Confirm Password*",
          errorMessage: "Passwords should match",
          label:"Confirm Password",
          pattern: values.password,
          required: true,
        }
        
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

            <div className='signUpMessage'>
               <h2>Want to list your restaurant on Gluten Free Finder?</h2>
               <p>This is simply dummy text of the printing and typesetting industry. That has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Layout passages. This is simply dummy text of the printing and typesetting industry.</p>
            </div>


            <form onSubmit={handleSubmit}>
                <h1>Sign Up</h1>
                {inputs.map((input) => (
                  <FormInput className="inputs" key={input.id} {...input} value={values[input.name]} onChange={onChange}/>
                ))}
                <input className="submit" type="submit" />
                <Link to="/signin"><p>Already a user? Sign In</p></Link>
             </form>

             
            
         </div>

         
    );
    
}
 
export default SignUp;