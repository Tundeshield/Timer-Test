import React from "react";
import "./index.css";

const Timer = ({ time }) => {
  return (
    <div className="timer">
      <span className="timer__counts">
        {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
      </span>
      <span className="timer__counts">
        {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
      </span>
      <span className="timer__counts">
        {("0" + Math.floor((time / 1000) % 60)).slice(-2)}.
      </span>
      <span className="timer__counts centi--sec">
        {("0" + ((time / 10) % 100)).slice(-2)}
      </span>
    </div>
  );
};

export default Timer;
