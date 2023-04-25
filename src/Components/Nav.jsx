import React, { useEffect, useState } from "react";
import "./Nav.css";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";

function Nav() {
  const [icon, setIcon] = useState(false);
  const [mode, setMode] = useState("dark");

  const toggleMode = () => {
    setIcon((prevIcon) => !prevIcon);

    if (mode === "dark") {
      setMode("light");
    } else {
      setMode("dark");
    }
  };

  useEffect(() => {
    document.body.className = mode;
  }, [mode]);

  return (
    <nav>
      <h3 className="logo">Prateek</h3>
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#project">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <i onClick={toggleMode}>
        {icon ? <MdOutlineLightMode /> : <MdOutlineDarkMode />}
      </i>
    </nav>
  );
}

export default Nav;
