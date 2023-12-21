import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosClient from "../../axios/client";

const signIn = createAsyncThunk("/user/sign-in", async (payload, action) => {
    console.log("Signing-in thunk", payload);
    const response = await axiosClient.post("/auth/sign-in", payload);
    return response.data; //response is an object with data and info about request, json() method returns the data you received from server as body
});


const signUp = createAsyncThunk("/user/sign-up", async (state, action) => {
    const response = await axiosClient.post("/auth/sign-up", { firstname: "Yura", lastname: "Shtefanko", email: "yurik@gmail.com", password: "yurashtefanko"});
    return response.data;
});

const authorize = createAsyncThunk("/auth/authorize", async (state, action) => {
    const response = await axiosClient.post(
        "/auth/authorize", 
        { 
           headers:  {
               Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiO…DAxfQ.lA2KMhqlSAZoKteDuVHiLsTThDAhMyRNVgxpZl-ELHA"
           }
        }
    );

    return response.data;
});

export { signIn, signUp, authorize };