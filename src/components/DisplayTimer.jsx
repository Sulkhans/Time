import { useEffect, useState } from "react";
import Alert from "../assets/Alert.mp3";

const DisplayTimer = () => {
  const [timerOn, setTimerOn] = useState(false);
  const [remainingTime, setRemainingTime] = useState(0);
  const [time, setTime] = useState({ hr: 0, min: 0, sec: 0 });
  const { hr, min, sec } = time;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setTime((prevTime) => ({
      ...prevTime,
      [name]: value,
    }));
  };
  const handleStart = () => {
    setTimerOn(true);
    setRemainingTime(hr * 3600 + min * 60 + sec);
  };
  const handlePause = () => {
    setTimerOn(false);
    setRemainingTime(0);
  };

  useEffect(() => {
    if (remainingTime > 0) {
      const interval = setInterval(() => {
        setRemainingTime((prevRemainingTime) => prevRemainingTime - 1);
        setTime({
          hr: Math.floor((remainingTime - 1) / 3600),
          min: Math.floor(((remainingTime - 1) % 3600) / 60),
          sec: (remainingTime - 1) % 60,
        });
      }, 1000);
      return () => clearInterval(interval);
    }
    if (remainingTime === 0 && timerOn) {
      const audio = new Audio(Alert);
      audio.play();
    }
  }, [remainingTime]);

  const handleKey = (event) => {
    const key = event.key;
    if (!(key >= "0" && key <= "9") && key !== "Backspace")
      event.preventDefault();
  };

  return (
    <main className="container">
      <div className="display">
        <div>
          <input
            value={hr}
            name="hr"
            max={24}
            min={0}
            maxLength={2}
            onChange={handleChange}
            onKeyDown={handleKey}
            disabled={remainingTime}
          />
          <span>:</span>
          <input
            value={min}
            name="min"
            max={59}
            min={0}
            maxLength={2}
            onChange={handleChange}
            onKeyDown={handleKey}
            disabled={remainingTime}
          />
          <span>:</span>
          <input
            value={sec}
            name="sec"
            max={59}
            min={0}
            maxLength={2}
            onChange={handleChange}
            onKeyDown={handleKey}
            disabled={remainingTime}
          />
        </div>
        <div className="button-container">
          <button onClick={handleStart} disabled={remainingTime}>
            Start
          </button>
          <button onClick={handlePause} disabled={!remainingTime}>
            Pause
          </button>
        </div>
      </div>
    </main>
  );
};

export default DisplayTimer;
