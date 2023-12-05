import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice(
    {
        name: "user",

        initialState: {},

        reducers: {
            signIn: () => "sign-in",
            signUp: () => "sign-up",
            authorize: () => "authorize"
        }
    }
);

export const { signIn, signUp, authorize } = userSlice.actions;
export default userSlice.reducer;