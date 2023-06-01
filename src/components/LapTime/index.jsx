import React, { useState } from "react";
import DeleteIcon from "../../assets/deleteIcon.svg";
import "./index.css";

const LapTime = ({ handleDeleteLapTime, lap }) => {
  return (
    <div className="lapTime">
      <span className="timer__count">Hours: {!lap.hour ? "0" : lap.hour}</span>
      <span className="timer__count">Minutes: {lap.minutes}</span>
      <span className="timer__count">Seconds: {lap.seconds}</span>
      <span className="timer__count centi--sec">
        Miliseconds: {lap.milliseconds}
      </span>

      <img
        src={DeleteIcon}
        alt="delete-icon"
        onClick={() => handleDeleteLapTime(lap.id)}
      />
    </div>
  );
};

export default LapTime;
