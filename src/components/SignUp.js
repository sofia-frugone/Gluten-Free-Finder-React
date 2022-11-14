import FormInput from '../components/FormInputs'
import { useState } from "react";

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
          placeholder:"Email",
          errorMessage: "It should be a valid email address",
          label:"Email",
          required: true,
        },
    
        {
          id:2,
          name:"password",
          type:"password",
          placeholder:"Password",
          errorMessage: "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character",
          label:"Password",
          pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
          required: true,
        },
    
        {
          id:3,
          name:"confirmPassword",
          type:"password",
          placeholder:"Confirm Password",
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
               <form onSubmit={handleSubmit}>
                 <h1>Sign Up</h1>
                 {inputs.map((input) => (
                   <FormInput className="inputs" key={input.id} {...input} value={values[input.name]} onChange={onChange}/>
                  ))}
                  <input className="submit" type="submit" />
               </form>
             </div>

    );
}
 
export default SignUp;