import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { UserContext } from "../context/UserContext";

function Header() {
  const { isDark } = useContext(ThemeContext);
  const user = useContext(UserContext);

  return (
    <header
      className="header"
      style={{
        backgroundColor: isDark ? "#111111" : "lightgray",
        color: isDark ? "white" : "#111111",
      }}
    >
      <h1>Welcome, {user}!</h1>
    </header>
  );
}

export default Header;
