import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosClient from "../../axios/client";

const signIn = createAsyncThunk("/user/sign-in", async (payload, action) => {
    //const response = await axiosClient.post("/api/auth/sign-in", payload); //Error occurs
    const response = await axios.post("http://localhost:1337/api/auth/sign-in", payload);
    return response.data; //response is an object with data and info about request, json() method returns the data you received from server as body
});


const signUp = createAsyncThunk("http://localhost:1337/api/user/sign-up", async (payload, action) => {
    //const response = await axiosClient.post("/auth/sign-up", { firstname: "Yura", lastname: "Shtefanko", email: "yurik@gmail.com", password: "yurashtefanko"});
    const response = await axios.post("http://localhost:1337/api/auth/sign-up", payload);
    return response.data;
});

const authorize = createAsyncThunk("/auth/authorize", async (payload, action) => {
    // const response = await axiosClient.post(
    //     "/auth/authorize", 
    //     { 
    //        headers:  {
    //            Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiO…DAxfQ.lA2KMhqlSAZoKteDuVHiLsTThDAhMyRNVgxpZl-ELHA"
    //        }
    //     }
    // );

    const response = await axios.post(
        "http://localhost:1337/api/auth/authorize", 
        { 
            headers:  {
                Authhorization: payload.token
               //Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiO…DAxfQ.lA2KMhqlSAZoKteDuVHiLsTThDAhMyRNVgxpZl-ELHA"
           }
        }
    );

    return response.data;
});

export { signIn, signUp, authorize };