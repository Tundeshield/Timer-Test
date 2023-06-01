import React from "react";
import LapTime from "../LapTime";
import "./index.css";

const LapHistory = () => {
  return (
    <div className="lapHistory">
      <h3>Lap History</h3>
      <LapTime />
      <LapTime />
      <LapTime />
      <LapTime />
      <LapTime />
    </div>
  );
};

export default LapHistory;
