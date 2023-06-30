import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counter.js";
import authSlice from "./auth.js";

const store = configureStore({
  reducer: {
    counter: counterSlice,
    auth: authSlice,
  },
});

export default store;
