import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./reducer/reducer";

let store = configureStore({
  //userslice
  reducer: {
    userSlice: userSlice,
  },
});

export default store;
