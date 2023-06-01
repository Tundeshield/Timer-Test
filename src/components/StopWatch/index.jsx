import React, { useEffect, useState } from "react";
import Timer from "../Timer";
import ActionButtons from "../ActionButtons";
import "./stopwatch.css";
import LapHistory from "../LapHistory";
import { v4 as uuidv4 } from "uuid";

const StopWatch = () => {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [lapTime, setLapTime] = useState({});
  const [lapTimes, setLapTimes] = useState([]);
  const uniqueId = uuidv4();

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
    setLapTimes([]);
    setTime(0);
  };

  //Method to add lap
  const handleAddLapTime = () => {
    setLapTime(time);
    // //Add the lap time to the list of lap times
    const { hour, minutes, seconds, milliseconds } = convertMilliseconds(time);
    const newLapTime = {
      id: uniqueId,
      hour: hour,
      minutes: minutes,
      seconds: seconds,
      milliseconds: milliseconds,
    };
    const updatedLapTimes = [...lapTimes, newLapTime];
    setLapTimes(updatedLapTimes);

    console.log(updatedLapTimes);
  };
  //Convert the milliseconds
  const convertMilliseconds = (time) => {
    const hours = Math.floor(time / 3600000);
    const minutes = Math.floor((time % 3600000) / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const milliseconds = time % 1000;

    return { hours, minutes, seconds, milliseconds };
  };

  const handleDeleteLapTime = (id) => {
    console.log(id);
    //Filter lap list with id
    const updatedLapList = lapTimes.filter((x) => x.id !== id);
    setLapTimes(updatedLapList);
  };
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
        <LapHistory
          handleDeleteLapTime={handleDeleteLapTime}
          lapTimes={lapTimes}
          clearLapHistory={clearLapHistory}
        />
      </section>
    </>
  );
};

export default StopWatch;
