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
            })

            .addCase(signIn.fulfilled, (state, action) => {
                // state.status = "loading";
                console.log("User received")
                state.user = action.payload;
            })

            .addCase(signIn.rejected, (state, action) => {
                // state.status = "loading";
            })
        }
    }
);

export const { /*signIn,*/ signUp, authorize } = userSlice.actions;
export default userSlice.reducer;