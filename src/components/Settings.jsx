import { useState } from "react";
import { useDarkMode } from "../context/DarkMode.context";
import { useFormat } from "../context/Format.context";
import DarkModeIcon from "../assets/dark.svg?react";
import FullscreenIcon from "../assets/full.svg?react";
import FormatIcon from "../assets/format.svg?react";
import ThunderIcon from "../assets/Thunder.svg?react";

const Settings = ({ toggleRain }) => {
  const { toggleDarkMode } = useDarkMode();
  const { format, toggleFormat } = useFormat();

  const [fullscreen, setFullscreen] = useState(false);
  const toggleFullscreen = () => {
    if (!fullscreen) {
      document.documentElement.requestFullscreen().then(() => {
        setFullscreen(true);
      });
    } else {
      document.exitFullscreen().then(() => {
        setFullscreen(false);
      });
    }
  };

  return (
    <div className="settings-container">
      <div onClick={toggleDarkMode}>
        <h3>Dark Mode</h3>
        <DarkModeIcon className="icon" />
      </div>
      {window.innerWidth > 768 && (
        <div onClick={toggleFullscreen}>
          <h3>Full Screen</h3>
          <FullscreenIcon className="icon" />
        </div>
      )}
      {location.pathname === "/Time/" && (
        <div onClick={toggleFormat}>
          <h3>{format ? "AM / PM" : "24-hour"}</h3>
          <FormatIcon className="icon" />
        </div>
      )}
      <div onClick={toggleRain}>
        <h3>Rain</h3>
        <ThunderIcon className="icon" />
      </div>
    </div>
  );
};

export default Settings;
