import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { UserContext } from "../context/UserContext";

function Content() {
  const { isDark } = useContext(ThemeContext);
  const user = useContext(UserContext);

  return (
    <div
      className="content"
      style={{
        backgroundColor: isDark ? "#111111" : "white",
        color: isDark ? "white" : "#111111",
      }}
    >
      <p>{user}님, 좋은 하루 되세요.</p>
    </div>
  );
}

export default Content;
