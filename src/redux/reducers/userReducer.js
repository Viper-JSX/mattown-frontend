import { createSlice } from "@reduxjs/toolkit";

import initialState from "../initialState";


const userSlice = createSlice(
    {
        name: "user",

        initialState: initialState.user,

        reducers: {
            signIn: () => "sign-in",
            signUp: () => "sign-up",
            authorize: () => "authorize"
        }
    }
);

export const { signIn, signUp, authorize } = userSlice.actions;
export default userSlice.reducer;