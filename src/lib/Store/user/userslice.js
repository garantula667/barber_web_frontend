"use client";
import { createSlice } from "@reduxjs/toolkit";
import { fetchUser } from "./userActions";
import { getUser, removeUser } from "../../localstate/Localstate";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")),
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout(state) {
      state.user = null;
      state.isLoading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
        state.user = null;
      });
  },
});

export const { logout } = userSlice.actions;

export default userSlice.reducer;
