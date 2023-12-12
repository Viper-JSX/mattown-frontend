import { createSlice } from "@reduxjs/toolkit";

import initialState from "../initialState";
import userReducers from "../reducers/userReducers";
import { signIn } from "../thunks/userThunks"; 


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
                state.user = action.payload;
            })

            .addCase(signIn.rejected, (state, action) => {
                // state.status = "loading";
                console.log("Error during sign-in");
            })
        }
    }
);

export const { /*signIn, signUp, authorize */ } = userSlice.actions;
export default userSlice.reducer;