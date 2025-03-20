import axios from "axios";
import { getTweets } from "../reducers/TweetReduser";

export const asnyTweets = (username) => async (dispatch, getState) => {
  try {
    const response = await axios.get(
      `https://twitter-api45.p.rapidapi.com/timeline.php?screenname=${username}`,
      {
        headers: {
          "x-rapidapi-key":
            "a9f5d0c888msha36716e833304e7p1bdbb3jsncd693dddd494",
          "x-rapidapi-host": "twitter-api45.p.rapidapi.com",
        },
      }
    );
    dispatch(getTweets(response.data.timeline));
  } catch (error) {
    console.log(error);
  }
};
