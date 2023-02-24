import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    login: (state, action) => {
      state.user = {
        email: action.payload.email,
        uid: action.payload.uid,
        displayName: action.payload.displayName,
        photoURL: action.payload.photoURL,
      };
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, logout } = userSlice.actions;

// Selectors
export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
