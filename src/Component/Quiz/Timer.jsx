import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Timer = ({ maxSec, maxMin }) => {
  const [seconds, setSeconds] = useState(maxSec);
  const [minute, setMinute] = useState(maxMin);
  const navigate = useNavigate();
  useEffect(() => {
    if (seconds > 0) {
      setTimeout(() => setSeconds(seconds - 1), 1000);
    }
    if (seconds <= 0) {
      setTimeout(() => setMinute(minute - 1), 0);
      setSeconds(maxSec);
    }
    if (minute === 0 && seconds === 0) {
      navigate("/result");
    }
  }, [maxSec, minute, seconds, navigate]);

  return (
    <div className="flex text-2xl">
      <p>{minute < 10 ? "0" + minute : minute}</p>:{" "}
      <p>{seconds < 10 ? "0" + seconds : seconds}</p>
    </div>
  );
};

export default Timer;
