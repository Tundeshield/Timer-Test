import React from "react";
import LapTime from "../LapTime";
import "./index.css";

const LapHistory = ({ handleDeleteLapTime, lapTimes, clearLapHistory }) => {
  return (
    <div className="lapHistory">
      <section>
        <h3>Your lap history </h3>
        {lapTimes.length !== 0 && (
          <button onClick={() => clearLapHistory()}>clear All</button>
        )}
      </section>

      {lapTimes.length !== 0 ? (
        lapTimes.map((lap) => (
          <LapTime handleDeleteLapTime={handleDeleteLapTime} lap={lap} />
        ))
      ) : (
        <i>
          There are no lap times to show, consider adding when you start timer.
        </i>
      )}
    </div>
  );
};

export default LapHistory;
