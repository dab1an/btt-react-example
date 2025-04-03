import React, { useState } from "react";
import heart from "../assets/heart.svg";
export const Nav = () => {
  const [likes, setLikes] = useState(0);

  function addLike() {
    setLikes(likes + 1);
  }

  return (
    <div className="nav">
      <span className="nav-titles" style={{ fontFamily: "sans-serif" }}>
        <h4>Home </h4>
        <h4>About</h4>
        <h4>Contact</h4>
        <h4>Github</h4>
      </span>

      <span style={{ display: "flex", alignItems: "center" }}>
        <button
          onClick={() => addLike()}
          style={{
            backgroundColor: "transparent",
            border: "0px",
            cursor: "pointer",
          }}
        >
          <img src={heart} alt="" height={25} />
        </button>
        <h4 style={{ fontSize: "25px", fontFamily: "sans-serif", margin: "0" }}>
          {likes}
        </h4>
      </span>
    </div>
  );
};

export default Nav;
