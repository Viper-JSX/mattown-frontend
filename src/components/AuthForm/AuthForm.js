import { useState } from "react";
import { authFormModes } from "../../variousThings/constants";

//import Switcher from "../../Switcher/Switcher.js";
import SignIn from "./SignIn.js";
import SignUp from "./SignUp.js";


const AuthForm = ({ handleSignIn, handleSignUp }) => {
  const [ mode, setMode ] = useState(authFormModes.signIn);
  const [ values, setValues ] = useState({email: "", password: ""});
  
    function handleSubmit (event) {
        if (mode === authFormModes.signIn) {
            return handleSignIn(event);
        }
    handleSignUp(event);
  }
  
  
    function handleModeChange(mode) {
        setMode(mode);
    }
  
    function handleChange(event){
        const fieldName = event.target.name;
        const fieldValue = event.target.value;
        console.log(fieldName, fieldValue);
        setValues((prev) => ({...prev, [fieldName]: fieldValue}));
    }

  
    return (
        <form onSubmit={handleSubmit}>
            {/* <Switcher 
                currentOption={mode} 
                options={authFormModes} 
                handler={handleModeChange} 
            /> */}
      
            {
                mode === authFormModes.signIn ?
                <SignIn 
                  values={{email: values.email, password: values.password}}

                  handleChange={handleChange} 
                />

                :

                <SignUp 
                  values={{email: values.email, password: values.password} }
                  handleChange={handleChange}
                />
            }
      
            <input type="submit" value={mode === authFormModes.signIn ? "Sign-In" : "SignUp"} /> 
        </form>
    );
}

export default AuthForm;