import { Route, Routes } from "react-router-dom";
import { Global, css } from "@emotion/react";
import { useDarkMode } from "./context/DarkMode.context";
import { FormatProvider } from "./context/Format.context";
import Header from "./components/Header";
import Footer from "./components/Footer";
import DisplayClock from "./components/DisplayClock";
import DisplayTimer from "./components/DisplayTimer";

const App = () => {
  const { darkMode } = useDarkMode();
  return (
    <div>
      <Global
        styles={css`
          body {
            background-color: ${darkMode ? "#111918" : "#eaeaea"};
            color: ${darkMode ? "#eaeaea" : "#111918"};
          }
          .icon {
            fill: ${darkMode ? "#eaeaea" : "#111918"};
          }
          @media (max-width: 425px) {
            .settings-container {
              width: 100%;
              border-bottom: 3px solid;
              background-color: ${darkMode ? "#111918" : "#eaeaea"};
            }
          }
        `}
      />
      <FormatProvider>
        <Header />
        <Routes>
          <Route path="/Time/" element={<DisplayClock />} />
          <Route path="/Timer/" element={<DisplayTimer />} />
        </Routes>
      </FormatProvider>
      <Footer />
    </div>
  );
};

export default App;
