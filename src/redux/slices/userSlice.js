import { createSlice } from "@reduxjs/toolkit";

import initialState from "../initialState";
import userReducers from "../reducers/userReducers";
import { authorize, signIn, signUp } from "../thunks/userThunks"; 


const userSlice = createSlice(
    {
        name: "user",
        initialState: initialState.user,
        reducers: userReducers,

        extraReducers: (builder) => {
            builder
            .addCase(signIn.pending, (state, action) => {
                // state.status = "loading";
                console.log("Signing-in");
            })

            .addCase(signIn.fulfilled, (state, action) => {
                // state.status = "loading";
                console.log("Sign-in successfull")
                const { user, token } =  action.payload;
                state.user = user;
                state.token = token;
                localStorage.setItem("token", token); //Will need to change to more secure and elegant way
            })

            .addCase(signIn.rejected, (state, action) => {
                // state.status = "loading";
                console.log("Error during sign-in", action.error);
            })



            .addCase(signUp.pending, (state, action) => {
                console.log("Signing-up");
            })

            .addCase(signUp.fulfilled, (state, action) => {
                state.user = action.payload.user; //maybe change user to profile
                state.token = action.payload.token;
                console.log("Sign-up successfull", action.payload);
            })

            .addCase(signUp.rejected, (state, action) => {
                console.log("Sign-up failded");
            })



            .addCase(authorize.pending, (state, action) => {
                console.log("Authorizing");
            })

            .addCase(authorize.fulfilled, (state, action) => {
                const { token } = action.payload;
                console.log("Authorization successfull", action.payload);
            })

            .addCase(authorize.rejected, (state, action) => {
                console.log("Authorization failed", action.error);
            })
        }
    }
);

export const { /*signIn, signUp, authorize */ } = userSlice.actions;
export default userSlice.reducer;