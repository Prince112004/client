import React, { useEffect, useState } from "react";
import {
  Link,
  NavLink,
  Outlet,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Userform from "./Userform";
import Locationform from "./Locationform";
import Aboutus from "./Aboutus";
import SortlistTweet from "./SortlistTweet";
import Sentiment from "./Sentiment";
import { useDispatch } from "react-redux";
import { asnyTweets } from "../store/actions/TweetAction";
import Shortlocation from "./Shortlocation";
import Instapage from "./Instapage";
import Post from "./Post";
import Instasentiment from "./Instasentiment";
import Locsearch from "./Locsearch";
import Specificlocation from "./Specificlocation";
import Locpost from "./Locpost";
import Locsentiment from "./Locsentiment";

function Home() {
  var [analysis, setAnalysis] = useState([]);
  const location = useLocation();
  const [user, setUser] = useState("");
  const [cities, setCities] = useState([]);
  const [posts, setPosts] = useState({});
  const [socialapp, setSocialapp] = useState("");
  const navigate = useNavigate(); // To navigate programmatically
  var dispatch = useDispatch();

  // Function to handle search button click and navigate to SortlistTweet
  const handleSearch = (username) => {
    if (socialapp === "twitter") {
      navigate("/sortlisttweet");
      dispatch(asnyTweets(username));
    } else if (socialapp === "instagram") {
      navigate("/instagrampage");
    }
  };
  const handleCities = (data) => {
    setCities(data);
  };
  const handlesocial = (response) => {
    setSocialapp(response);
  };
  const handlePost = (response) => {
    setPosts(response);
  };
  const handleUsername = (username) => {
    setUser(username);
    console.log(user);
  };
  useEffect(() => {
    if (analysis.length > 0) {
      console.log(analysis); // This will log when `analysis` is updated
    }
  }, [analysis]);

  const handleSentiment = (sentiresponse) => {
    setAnalysis(sentiresponse); // Set the updated sentiment response
    navigate("/sentiment"); // Navigate to the sentiment page
  };
  const handleHome = () => {
    navigate("/");
  };
  return (
    <div className="h-screen flex flex-col gap-[4vw] justify-center w-full">
      <div className="homeblank w-full h-[13%]"></div>
      {location.pathname === "/about" ? (
        <div className="homecenter flex justify-center items-center h-[70%] w-full">
          <Aboutus />
        </div>
      ) : location.pathname === "/sortlisttweet" ? (
        <div className="homecenter flex justify-center items-center h-[70%] w-full">
          <SortlistTweet
            user={user}
            home={handleHome}
            senti={handleSentiment}
          />
        </div>
      ) : location.pathname === "/sentiment" ? (
        <div className="homecenter flex justify-center items-center h-[70%] w-full">
          <Sentiment analysis={analysis} />
        </div>
      ) : location.pathname === "/post" ? (
        <div className="homecenter flex justify-center items-center h-[70%] w-full">
          <Post />
        </div>
      ) : location.pathname === "/post" ? (
        <div className="homecenter flex justify-center items-center h-[70%] w-full">
          <Post />
        </div>
      ) : location.pathname === "/instasentiment" ? (
        <div className="homecenter flex justify-center items-center h-[70%] w-full">
          <Instasentiment />
        </div>
      ) : location.pathname === "/instagrampage" ? (
        <div className="homecenter flex justify-center items-center h-[70%] w-full">
          <Instapage username={user} />
        </div>
      ) : location.pathname === "/specificlocation" ? (
        <div className="homecenter flex justify-center items-center h-[70%] w-full">
          <Specificlocation posts={posts} username={user} />
        </div>
      ) : location.pathname === "/locpost" ? (
        <div className="homecenter flex justify-center items-center h-[70%] w-full">
          <Locpost username={user} />
        </div>
      ) : location.pathname === "/locsentiment" ? (
        <div className="homecenter flex justify-center items-center h-[70%] w-full">
          <Locsentiment username={user} />
        </div>
      ) : location.pathname === "/locsearch" ? (
        <div className="homecenter flex justify-center items-center h-[70%] w-full">
          <Locsearch handlePosts={handlePost} cities={cities} username={user} />
        </div>
      ) : (
        <div className="homecenter flex justify-center h-[70%] w-full">
          <div className="centerbox h-full w-[30%]">
            {/* Navigation Section */}
            <div className="homenav h-[20%] gap-[2vw] w-full flex justify-center items-center">
              <NavLink
                style={(e) => ({
                  color: e.isActive ? "#F9C812" : "",
                  fontWeight: e.isActive ? 700 : "",
                })}
                to="/"
                className="text-md font-[400]"
                end
              >
                Find via Profile Link
              </NavLink>
              <NavLink
                style={(e) => ({
                  color: e.isActive ? "#F9C812" : "",
                  fontWeight: e.isActive ? 700 : "",
                })}
                to="/bykeyword"
                className="text-md font-[400]"
              >
                Find via Location
              </NavLink>
            </div>

            {/* Route Rendering Section */}
            <div className="homesearch h-[80%] w-full">
              <Routes>
                <Route
                  path="/"
                  element={
                    <Userform
                      social={handlesocial}
                      user={handleUsername}
                      onSearch={handleSearch}
                    />
                  }
                />
                <Route
                  path="/bykeyword"
                  element={<Locationform diffcities={handleCities} />}
                />
              </Routes>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
