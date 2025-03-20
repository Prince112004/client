import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  value: [],
};

export const TweetSlice = createSlice({
  name: "tweets",
  initialState,
  reducers: {
    getTweets: (state, action) => {
      state.tweets = action.payload;
    },
  },
});

export default TweetSlice.reducer;

export const {getTweets} = TweetSlice.actions
