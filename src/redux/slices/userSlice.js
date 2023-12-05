import { createSlice } from "@reduxjs/toolkit";

import initialState from "../initialState";
import userReducers from "../reducers/userReducers";


const userSlice = createSlice(
    {
        name: "user",

        initialState: initialState.user,

        reducers: userReducers
    }
);

export const { signIn, signUp, authorize } = userSlice.actions;
export default userSlice.reducer;