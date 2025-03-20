import React from "react";
import { toast } from "react-toastify";

function Sentimentbar({ sentiment }) {
  const { text, id } = sentiment;

  const tweet_ids = {
    tweet_id: `${id}`,
  };

  const alertData = {
    tweet_id: `${id}`,
    user_name: "unknown",
  };

  const sendTweetDataToBackend = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5100/network', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(tweet_ids), // Send the ID in the body
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      // Optionally, handle the response data if needed
      const data = await response.json();
      console.log('Response data:', data);
    } catch (error) {
      console.error('Error fetching data from server:', error);
      toast.error("Failed to send tweet data.");
    }
  };

  const sendAlertToAgency = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5200/alert', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(alertData), // Send the ID in the body
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Optionally, handle the response data if needed
      const data = await response.json();
      console.log('Response data:', data);
    } catch (error) {
      console.error('Error fetching data from server:', error);
      toast.error("Failed to send alert.");
    }
  };

  const handleClick = () => {
    sendAlertToAgency();
    toast.success("Email sent successfully");
  };

  return (
    <div className="sentimentbar py-[1.2vw] px-[1.6vw] rounded flex w-full bg-[#1C3738]">
      <div className="tweettext flex flex-col justify-center h-full w-[70%]">
        <h1 className="text-[#fff] mt-[0.3vw]">{text}</h1>
        <div className="socials mt-[0.5vw] flex gap-[2vw] ">
          {/* Additional social interaction components can go here */}
        </div>
      </div>
      <div className="buttons flex justify-end gap-[1.5vw] items-center h-full w-[30%]">
        <button 
          onClick={sendTweetDataToBackend} 
          className="bg-[#2b9348] px-[1.5vw] h-fit py-[0.7vw] rounded"
        >
          <h1 className="text-[0.9vw] text-[#fff]">Perform Network Analysis</h1>
        </button>
        <button 
          onClick={handleClick} 
          className="bg-[#c1121f] px-[1.5vw] h-fit py-[0.7vw] rounded"
        >
          <h1 className="text-[0.9vw] text-[#fff]">Alert Reinforcement</h1>
        </button>
      </div>
    </div>
  );
}

export default Sentimentbar;
