import { createSlice } from "@reduxjs/toolkit";

export const errorSlice = createSlice({
  name: "error",
  initialState: {
    error: false,
    message: "",
  },
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    updateError: (state, action) => {
      state.error = true;
      state.message = action.payload.code;
    },
    removeError: (state) => {
      state.error = false;
    },
  },
});

export const { updateError, removeError } = errorSlice.actions;

// Selectors
export const selectError = (state) => state.error;

export default errorSlice.reducer;
