import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Footer() {
  const { isDark, setIsDark } = useContext(ThemeContext);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <footer
      className="footer"
      style={{
        backgroundColor: isDark ? "#111111" : "lightgray",
        color: isDark ? "white" : "#111111",
      }}
    >
      <button className="button" onClick={toggleTheme}>
        Dark Mode
      </button>
    </footer>
  );
}

export default Footer;
