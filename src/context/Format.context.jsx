import { createContext, useContext, useState } from "react";

const FormatContext = createContext();

export const FormatProvider = ({ children }) => {
  const [format, setFormat] = useState(false);
  const toggleFormat = () => setFormat(!format);

  return (
    <FormatContext.Provider value={{ format, toggleFormat }}>
      {children}
    </FormatContext.Provider>
  );
};

export const useFormat = () => {
  return useContext(FormatContext);
};
