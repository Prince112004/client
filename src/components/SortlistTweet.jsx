import React, { useEffect, useState } from "react";
import Tweetbar from "./Tweetbar";
import { useDispatch, useSelector } from "react-redux";
import { getTweets } from "../store/reducers/TweetReduser";
import { asnyTweets } from "../store/actions/TweetAction";
import axios from "axios";
import Loader from "./Loader";
import { Cloudinary } from '@cloudinary/url-gen';
import { auto } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';
import { AdvancedImage } from '@cloudinary/react';

function SortlistTweet({ user, senti, home }) {
  const { tweets } = useSelector((state) => state.TweetReduser);

  const [loading, setLoading] = useState(true);

  const wordDataset = [
    "Islam", "Muslim", "ISIS","allah", "Hindu", "Hinduism", "Christian", "Christianity", 
    "Judaism", "Sikh", "Buddhism", "faith", "religion", "mulla" , "isis" ,
    "belief", "extremist", "fundamentalist", "radical", "sect", 
    "caste", "mullah", "ayatollah", "priest", "pundit", "cleric", 
    "sacred", "blasphemy", "apostasy", "heresy", "conversion", 
    "jihad", "terrorist", "terrorism", "pregnant" , 
    "sex", "sexual", "abuse", "assault", "molestation", "rape", 
    "rape culture", "sexism", "objectification", "exploitation", 
    "violence", "hate speech", "misogyny", "bullying", 
    "harassment", "intimidation", "coercion", "anti-Semitism", 
    "anti-Muslim", "anti-Hindu", "anti-Christian", 
    "xenophobia", "homophobia", "transphobia", 
    "human trafficking", "sexual harassment", "child exploitation", 
    "hatya", "gandhigiri", "gali", "buraai", "chut", 
    "bhonsdi", "madarchod", "gandu", "behenchod",
    "kutta", "chooth", "chutiyapa", "maderchod",
    "gadha", "bholi", "harami", "chutiyad",
    "bichu", "gandi", "ghatiya", "pagal", "bhedbhav",
    "sangharsh", "virodhi", "saza", "gussa", "danga" ,
    "jihad", "dharma", "virodhi", "bajrang", "dhamaka", "raasta", 
    "buraai", "dhamakaa", "dushman", "shor", "vishwa", "khaas", 
    "bacha", "khaas", "sazaa", "gussa", "ladayi", "aakraman", 
    "gaddar", "mohabbat", 
    "maamla", "nazar", "dar", "jhooth", "virodh", 
    "dakhil", "sambhal", "bura", "prarthana", "mahamari", 
    "mazaar", "gali", "raakh", "siyasi", "manzoor", "daag", 
    "ukhad", "samaaj", "badla", "jhooth", "mahaul", "khaani", 
    "raaz", "sawaal", "sambhal", "jaldi", "hinsa", "sazaa",
    "chut", "bhosdi", "madarchod", "sala", "gandu", "behenchod",
    "kutta", "chooth", "chutiyapa", "bakra", "saala", "maderchod",
    "gadha", "bholi", "tatti", "bhen", "harami", "chutiyad",
    "bichu", "gandi", "ghatiya", "pagal", "kharab", "phuski",
    "teda", "billi", "bakra", "gandu", "murgi", "chutiya",
    "hatya", "satyagraha", "rajniti", "gandhigiri", "sarkar", 
    "aakraman", "virodhi", "dharna","sena", 
    "goli", "khoon", "raksha", "revolution", "struggle", 
    "akhar", "badhawa", "protest", "rasta roko", "jail bharo", 
    "manch", "janhit", "mukhya", "raasta", "parivartan", 
    "awaz", "ghera", "laathi", "dhamaka", "jeene ka hak", 
    "khalas", "jagrukta", "sahaayata", "khalna", "bhavishya", 
    "raaz", "karz", "padhayi", "sarkari", "nagrik", 
    "janata", "chunaav", "bikhaas", "bhedbhav", "uchak", 
    "dastak", "vishwasghaat", "vishwadhaari", "fauj", "kadam", 
    "karyakarta", "kanun", "vikas", "sangharsh", "jail", 
    "jagah", "swaatantrya", "haq", "nazar", "janata", 
    "shor", "sangharsh", "pratirodh", "pradarshan", "ankh", 
    "sarhad", "virodhi", "paryavaran", "khoj", "raaj", 
    "naksal", "dhamaka", "vishwas", "rajneeti", "akhada" ,
     "चुत", "भोसड़ी", "मादरचोद", "साला", "गांडू", "बहनचोद",
    "कुत्ता", "चूत", "चूतियापा", "बकरा", "मादरचोद",
    "गधा", "हरामी", "चूतियाद", "गंदी", "घटिया", "पागल",
    "गांडू", "चुतिया",
    "हत्या", "बलात्कार", "उग्रवादी", "घृणा", "शोषण",
    "दंगा", "हत्या", "आतंकवादी", "अवमानना", "घृणा अपराध",
    "भेदभाव", "धमकी", "जबरदस्ती", "यौन उत्पीड़न", "मानव तस्करी",
    "नरसंहार", "रक्तपात", "हिंसा", "सर्वनाश", "लिंचिंग",
    "आत्महत्या", "दबाव", "उत्पीड़न", "अत्याचार",
    "गद्दारी", "विद्रोह", "आगजनी", "कट्टरपंथ", "नरसंहार", "mafia","boycott","unsafe","drug","lottery","slaughter","corruption","government","tourism", "tourist", "goa","scam"
]
  useEffect(() => {
    // Delay the display of content by 3 seconds
    const timer = setTimeout(() => {
      setLoading(false); // Hide loader after 3 seconds
    }, 4000);

    // Clean up the timer when component unmounts
    return () => clearTimeout(timer);
  }, []);

  const filteredTweets =
  tweets && Array.isArray(tweets)
    ? tweets.filter((tweet) => {
        return wordDataset.some((word) =>
          tweet.text.toLowerCase().includes(word.toLowerCase())
        );
      })
    : [];

// Create an object with a "tweets" array
const tweetData = {
  tweets: filteredTweets.map((tweet) => ({
    screen_name: tweet.author.screen_name,
    profile_pic: tweet.author.avatar,
    id: tweet.tweet_id,
    text: tweet.text,
  })),
};

// console.log(`${JSON.stringify(tweets)}1`);
console.log(tweetData)

const App = () => {
  const cld = new Cloudinary({ cloud: { cloudName: 'dk5zbkmnr' } });
  
  // Use this sample image or upload your own via the Media Explorer
  const img = cld
        .image('https://scontent-bom2-3.cdninstagram.com/v/t51.2885-19/81216452_611393802960798_2232675887684255744_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-bom2-3.cdninstagram.com&_nc_cat=106&_nc_ohc=rZ9eDgUSmboQ7kNvgFMgD2j&_nc_gid=8d4be5a7540c40c187bcf26c1136e0ba&edm=APU89FABAAAA&ccb=7-5&oh=00_AYCnwQmTJjCx4umgaxEXJjXtWUPVlG5D8eVOXb8yAPNCHA&oe=671C6FDF&_nc_sid=bc0c2c')
        .format('auto') // Optimize delivery by resizing and applying auto-format and auto-quality
        .quality('auto')
        .resize(auto().gravity(autoGravity()).width(500).height(500)); // Transform the image: auto-crop to square aspect_ratio
  console.log(img);
  console.log(AdvancedImage)
  return (<AdvancedImage cldImg={img}/>);
};
  const handleButtonClick = () => {
   
    sendTweetDataToBackend();
};
const [sentiresponse,setSentiresponse] =useState([]);
  const sendTweetDataToBackend = async () => {
    try {
      const response = await axios.post("http://127.0.0.1:5001/sentiment", tweetData);
      console.log("Data sent successfully:", response.data);
      setSentiresponse(response.data); 
      senti(response.data);
    } catch (error) {
      console.error("Error sending data to backend:", error);
    }
  };


  // fetch('http://localhost:5000/sentiment', {
  //   method: 'POST',
  //   headers: {
  //       'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify(tweetData)
  // })
  // .then(response => response.json())
  // .then(data => console.log('result:', data))
  // .catch(error => console.error('Error:', error));

const firstTweet = filteredTweets[0] ;
console.log(firstTweet)
  // console.log(tweets);
  if (loading) {
    return <Loader />;
  }

  return  (
    <div className="h-[100%] overflow-auto px-[3vw] flex flex-col gap-[0.5vw] w-full">
      <div className="useridandbutton  flex gap-[1vw] justify-between items-center   mb-[1vw]">
      <div className="picturecircle h-[7.5vw] w-[7.5vw] overflow-hidden  rounded-full bg-[#241212]">
            {firstTweet && firstTweet.author && firstTweet.author.avatar  ? ( // Check if firstTweet exists
              <img
                className="h-full w-full object-cover"
                src= {`${firstTweet.author.avatar}`} // Use profile_pic from firstTweet
                alt={`${firstTweet.author.screen_name}'s profile`}
              />
            ) : (
              <div className="h-full w-full flex items-center justify-center">
                <span className="text-[#fff]">Loading...</span> {/* Placeholder if no image */}
              </div>
            )}
      </div>
        <h1 className=" font-[800] text-3xl mr-[38vw]"> User ID : {user}</h1>
        {filteredTweets.length > 0 ? (
          <button
            onClick={handleButtonClick}
            className="sentimentalbutton bg-[#2b9348] rounded  px-[2vw] py-[0.95vw]"
          >
            <h1 className="text-[#fff] text-sm">
              Perform Sentimental Analysis{" "}
            </h1>
          </button>
        ) : (
          <button
            onClick={home}
            className="sentimentalbutton bg-[#2b9348] rounded  px-[2vw] py-[0.95vw]"
          >
            <h1 className="text-[#fff] text-sm">Back To Home</h1>
          </button>
        )}
      </div>
      {filteredTweets.length > 0 ? (
        filteredTweets.map((elem, index) => {
          return <Tweetbar key={index} tweet={elem} />;
        })
      ) : (
        <h1 className="text-3xl mt-[1vw] font-[600]">
          No harmful or offensive tweets were found for this user.
        </h1>
      )}
    </div>
  );
}

export default SortlistTweet;
