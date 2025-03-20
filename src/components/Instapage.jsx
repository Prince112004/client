import React, { useEffect, useState } from "react";
import Instabar from "./Instabar";
import Loader from "./Loader";
import axios from "axios" ;

function Instapage({ username }) {
  const [instaData, setInstaData] = useState({}); // State to hold API data
  const [loading, setLoading] = useState(true); // State to manage loading

  useEffect(() => {
    const fetchInstaData = async () => {
      try {
        const response = await axios.get(`https://instagram-scraper-api2.p.rapidapi.com/v1.2/posts?username_or_id_or_url=${username}`, 
          {
            headers: {
              "x-rapidapi-key":
                "51a42bf0b3msh4748e05640787b6p151cc7jsn43414d46137b",
              "x-rapidapi-host": "instagram-scraper-api2.p.rapidapi.com",
            },
          }
        ); // Replace with your API endpoint
        const postsList = response.data.data.items;
        const pp_url = postsList[0].user.profile_pic_url ;
        let pp_url_Sachi
        try {
          const response = await axios.post("http://localhost:3000/url", {
            pp_url:pp_url,
        })
          console.log(response.data)
           pp_url_Sachi = response.data ;
          if (response.status === 200) {
            console.log('Upload successful:', response.data);
            
      // Handle the uploaded image data as needed
          } else {
            console.log('Upload failed with status:', response.status);
           }
        } catch (error) {
          console.log(error)
        }
        const postsDict = {};
        postsList.forEach(post => {

        const postId = post.id;
        const isVideo = post.is_video;
        postsDict[postId] = {
            postid:postId,
            username: post.user.username ,
            profile_pic: pp_url_Sachi ,
            is_video: isVideo,
            timestamp: (new Date((new Date((post.taken_at) * 1000)).getTime() + 5.5 * 60 * 60 * 1000)).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
            num_likes: post.like_count,
            num_comments: post.comment_count,
            caption: post.caption ? post.caption.text : null,
            image_url: post.thumbnail_url,
            is_pinned: post.is_pinned,
            video_url: post.is_video ? post.video_url : null
        };
    });
      console.log(postsDict)
      // console.log(Object.values(postsDict)[0].profile_pic)
        setInstaData(postsDict); // Assuming the response contains an array
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false); // Set loading to false after data is fetched
      }
    };

    fetchInstaData();
  }, []); // Empty dependency array means this runs once on component mount

  if (loading) {
    <Loader />; // Optional: Show a loading indicator while fetching data
  }
  const firstPost = Object.values(instaData)[0];
  return (
    <div className="h-[100%] overflow-auto px-[3vw] flex flex-col gap-[1vw] w-full">
      <div className="useridandbutton flex justify-between items-center mt-[1vw] mb-[2vw]">
        <div className="userinfo flex items-center gap-[2vw]">
          <div className="picturecircle h-[7.5vw] w-[7.5vw] overflow-hidden rounded-full bg-[#241212]">
            {firstPost ? ( // Check if firstPost exists
              <img
                className="h-full w-full object-cover"
                src= {`${firstPost.profile_pic}`} // Use profile_pic from firstPost
                alt={`${firstPost.username}'s profile`}
              />
            ) : (
              <div className="h-full w-full flex items-center justify-center">
                <span className="text-[#fff]">Loading...</span> {/* Placeholder if no image */}
              </div>
            )}
          </div>
          <h1 className="font-[800] text-4xl">@{username}</h1>
        </div>

        <button className="sentimentalbutton bg-[#2b9348] rounded px-[2vw] py-[0.95vw]">
          <h1 className="text-[#fff] text-sm">Back To Home</h1>
        </button>
      </div>

      {/* Render posts */}
      {Object.keys(instaData).length > 0 ? (
        Object.keys(instaData).map((postId) => (
          <Instabar key={postId} instaData={instaData[postId]} /> // Pass post data to Instabar
        ))
      ) : (
        <p>No posts available.</p> // Handle case when there are no posts
      )}
    </div>
  );

}

export default Instapage;
