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
        const token = localStorage.getItem("token");

        if (token) {
            dispatch(authorize({ token }));
        }

    }, [])
    console.log(state);

    const handleSignIn = (values) => {
        dispatch(signIn(values));
        console.log("Sign-in", values);
    }

    const handleSignUp = (values) => {
        dispatch(signUp(values));
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