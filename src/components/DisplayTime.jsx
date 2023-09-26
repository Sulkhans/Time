import { useState, useEffect } from "react";
import { useFormat } from "../context/Format.context";
import Alert from "../assets/Alert.mp3";

const DisplayTime = () => {
  const { format } = useFormat();

  const [currentTime, setCurrentTime] = useState("");
  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      let newTime = date.toLocaleTimeString(undefined, {
        hour: format ? "numeric" : "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: format,
      });
      if (newTime.startsWith("24")) {
        newTime = "00" + newTime.slice(2);
      }
      if (newTime.includes("00:00")) {
        const audio = new Audio(Alert);
        audio.play();
      }
      setCurrentTime(newTime);
    }, 1000);

    return () => clearInterval(interval);
  }, [format]);

  return <h1 className="time">{currentTime}</h1>;
};

export default DisplayTime;
