import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosClient from "../../axios/client";

const signIn = createAsyncThunk("/user/sign-in", async (state, action) => {
    //const response = await fetch("http://localhost:1337/api/auth/sign-in", { method: "post", body: JSON.stringify({ email: "sss", password: 1})});
    const response = await axiosClient.post("/auth/sign-in", { email: "yura@gmail.com", password: "yurashtefanko"});
    console.log(response.data);
    return response.data; //response is an object with data and info about request, json() method returns the data you received from server as body
});


const signUp = createAsyncThunk("/user/sign-up", async (state, action) => {
    const response = await axiosClient.post("/auth/sign-in", { firstname: "Yura", lastname: "Shtefanko", email: "yurik@gmail.com", password: "yurashtefanko"});
    return response.data;
});

export { signIn, signUp };