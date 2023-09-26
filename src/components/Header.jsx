import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import SettingsIcon from "../assets/setting.svg?react";
import TimeIcon from "../assets/time.svg?react";
import TimerIcon from "../assets/timer.svg?react";
import Settings from "./Settings";
import Rain from "../assets/Rain.mp3";

const Header = () => {
  const location = useLocation();

  const [settings, setSettings] = useState(false);
  const toggleSettings = () => setSettings(!settings);

  const [rain, setRain] = useState(false);
  const toggleRain = () => setRain(!rain);

  return (
    <div>
      <header>
        {location.pathname === "/Timer/" ? (
          <Link to="/Time/">
            <TimerIcon className="mode" />
          </Link>
        ) : (
          <Link to="/Timer/">
            <TimeIcon className="mode" />
          </Link>
        )}
        <SettingsIcon className="icon" onClick={toggleSettings} />
      </header>
      {settings && <Settings toggleRain={toggleRain} location={location} />}
      {rain && (
        <audio autoPlay loop>
          <source src={Rain} type="audio/mpeg" />
        </audio>
      )}
    </div>
  );
};

export default Header;
