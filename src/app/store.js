import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import errorReducer from "../features/errorSlice";
export const store = configureStore({
  reducer: {
    user: userReducer,
    error: errorReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
