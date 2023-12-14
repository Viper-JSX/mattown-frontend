//import "./css/main.scss"

import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import Layout from "./components/Layout";

import { useDispatch, useSelector } from "react-redux";
import { authorize, signIn, signUp } from "./redux/thunks/userThunks";
 
function App(){
    const state = useSelector((state) => state);
    const dispatch = useDispatch();

    useEffect(() => { 
        dispatch(authorize()); 
    }, [])
    console.log(state);

    const handleSignIn = () => {
        console.log("Sign-in");
    }

    const handleSignUp = () => {
        console.log("Sign-up");
    }

    return(
        <div className='App'>
            <Layout 
                handleSignIn={handleSignIn}
                handleSignUp={handleSignUp}
            />
        </div>
    );
}

export default App;