import { useState, useEffect } from "react";

const DisplayDate = () => {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      const newDate = date.toLocaleDateString(undefined, {
        year: "numeric",
        month: "long",
        weekday: "long",
        day: "numeric",
      });
      setCurrentDate(newDate);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <h1 className="date">{currentDate}</h1>;
};

export default DisplayDate;
