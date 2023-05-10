import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import profileReducer from "../features/profile/profileReducer";

export default configureStore({
  reducer: {
    counter: counterReducer,
    profile: profileReducer,
  },
});
