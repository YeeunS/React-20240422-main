import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./Slice/counterReducer.ts";

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
