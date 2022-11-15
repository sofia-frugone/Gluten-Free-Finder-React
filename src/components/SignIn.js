import FormInput from '../components/FormInputs'
import { useState } from "react";
import { Link } from 'react-router-dom'


const SignIn = () => {
    const [values, setValues] = useState({
        email: "",
        password: "",
        
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
          errorMessage: "Invalid password",
          label:"Password",
          pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
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
                 
                 <h1>Sign In</h1>
                 {inputs.map((input) => (
                   <FormInput className="inputs" key={input.id} {...input} value={values[input.name]} onChange={onChange}/>
                  ))}
                  <input className="submit" type="submit" />
                  <Link to="/signup"><p>Need to create an account? Sign Up</p></Link>
               </form>
             </div>

    );
}
 
export default SignIn;