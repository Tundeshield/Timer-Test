import React from "react";
import DeleteIcon from "../../assets/deleteIcon.svg";
import "./index.css";

const LapTime = () => {
  return (
    <div className="lapTime">
      <p>Time: 41:20:05</p>
      <img src={DeleteIcon} alt="delete-icon" />
    </div>
  );
};

export default LapTime;
