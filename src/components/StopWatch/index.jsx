import React, { useEffect, useState } from "react";
import Timer from "../Timer";
import ActionButtons from "../ActionButtons";
import "./stopwatch.css";
import LapHistory from "../LapHistory";

const StopWatch = () => {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [lapTime, setLapTime] = useState({});
  const [lapTimes, setLapTimes] = useState([]);

  useEffect(() => {
    let interval;
    //If stop watch is active and not paused, keep counting
    if (isActive && isPaused === false) {
      //Using javascript setInterval method to run every millisecrond
      interval = setInterval(() => {
        setTime((time) => time + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive, isPaused]);

  //Method to start timer
  const handleStart = () => {
    setIsPaused(false);
    setIsActive(true);
  };
  //Method to toggle pause
  const togglePause = () => {
    setIsPaused(!isPaused);
  };

  //Method to reset timer
  const handleReset = () => {
    setIsActive(false);
    setTime(0);
  };

  //Method to add lap
  const handleAddLapTime = () => {};
  const handleDeleteLapTime = (id) => {};
  const clearLapHistory = () => {
    setLapTimes([]);
  };

  return (
    <>
      <section className="stopwatch">
        <Timer time={time} />
        <ActionButtons
          handleAddLapTime={handleAddLapTime}
          handleStart={handleStart}
          handleReset={handleReset}
          togglePause={togglePause}
          isActive={isActive}
          isPaused={isPaused}
        />
        <LapHistory />
      </section>
    </>
  );
};

export default StopWatch;
