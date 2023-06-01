import React from "react";
import "./index.css";

const ActionButtons = ({
  handleAddLapTime,
  handleStart,
  handleReset,
  togglePause,
  isActive,
  isPaused,
}) => {
  const StartButton = (
    <div className="btn btn__start" onClick={handleStart}>
      Start Timer
    </div>
  );
  const ActiveButtons = (
    <div className="action__btn-grp">
      <div className="btn btn__lap" onClick={handleAddLapTime}>
        Add to Lap
      </div>
      <div className="btn btn__clear" onClick={handleReset}>
        Reset
      </div>
      <div className="btn btn__start" onClick={togglePause}>
        {isPaused ? "Resume" : "Pause"}
      </div>
    </div>
  );
  return (
    <div className="action__btns">
      <div>{isActive ? ActiveButtons : StartButton}</div>
    </div>
  );
};

export default ActionButtons;
