import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});


export const { login, logout } = counterSlice.actions;

// Selectors 
export const selectUser = (state) => state.user.user;

export default counterSlice.reducer;
