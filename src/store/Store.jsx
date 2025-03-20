import { configureStore } from "@reduxjs/toolkit";
import TweetReduser from "./reducers/TweetReduser";

export const store = configureStore({
  reducer: {
    TweetReduser: TweetReduser,
  },
});
