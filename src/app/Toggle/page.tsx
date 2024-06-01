"use client"
import "./toggle.css";
import { useContext } from "react";
import { ThemeContext} from "../context";

const Toggle: React.FC = () => {
  const theme = useContext(ThemeContext);

  const handleClick = () => {
    theme.dispatch({ type: "TOGGLE" });
  };

  return (
    <div 
      className="t"
      onClick={handleClick}
      style={{ backgroundColor: theme.state.darkMode ? "white" : "lightgrey"}}
      >
      <img src="/image/sun.png" alt="" className="t-icon" />
      <img src="/image/moon.png" alt="" className="t-icon" />
      <div
        className="t-button"
        style={{ left: theme.state.darkMode ? 0 : 25 }}
      ></div>
    </div>
  );
};

export default Toggle;
