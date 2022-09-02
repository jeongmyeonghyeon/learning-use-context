import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { UserContext } from "../store/users";

function About(props) {
  const { isDark } = useContext(ThemeContext);
  const { name, job } = useContext(UserContext);

  return (
    <div
      style={{
        backgroundColor: isDark ? "#111111" : "white",
        color: isDark ? "white" : "#111111",
      }}
    >
      <h3>{name}</h3>
      <h4>{job}</h4>
    </div>
  );
}

export default About;
