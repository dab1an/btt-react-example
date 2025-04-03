import React, { useState } from "react";
import youtube_icon from "../assets/youtube_icon.svg"; // Adjust path if needed
import twitter_icon from "../assets/twitter_icon.svg";
import instagram_icon from "../assets/instagram_icon.svg";
import reddit_icon from "../assets/reddit_icon.svg";
import cat_comp from "../assets/cat_comp.jpg";

export const ProfileCard = () => {
  const [age, setAge] = useState(21);

  function updateAge() {
    const randomAge = Math.floor(Math.random() * (100 - 18 + 1)) + 18; // Random age between 18 and 100
    setAge(randomAge);
  }

  return (
    <div className="profile-card">
      <div className="profile-text-container">
        <h1 style={{ margin: 0, padding: 0, fontFamily: "sans-serif" }}>
          Dabian Garnica
        </h1>

        <p style={{ margin: 0, padding: 0, fontFamily: "sans-serif" }}>
          I love web development! There’s something satisfying about bringing
          ideas to life on the screen, be it crafting a sleek UI or piecing the
          logic behind the scenes. But honestly, the best part? Collaborating
          with others to build awesome things!
        </p>

        <span className="logos-span">
          <a href="https://www.youtube.com/" target="_blank">
            <img src={youtube_icon} alt="youtube_logo" height="50" />
          </a>

          <a href="https://twitter.com/" target="_blank">
            <img src={twitter_icon} alt="twitter_logo" height="45" />
          </a>

          <a href="https://www.instagram.com/" target="_blank">
            <img src={instagram_icon} alt="instagram_icon" height="45" />
          </a>

          <a href="https://www.reddit.com/" target="_blank">
            <img src={reddit_icon} alt="reddit_icon" height="50" />
          </a>
        </span>
      </div>
      <img src={cat_comp} alt="" height={250} style={{ borderRadius: 20 }} />
    </div>
  );
};

export default ProfileCard;
