import { createAsyncThunk } from "@reduxjs/toolkit";

const signIn = createAsyncThunk("/user/sign-in", async (state, action) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1");

    return response.json();
});


const signUp = createAsyncThunk("/user/sign-in", async (state, action) => {

});

export { signIn, signUp }