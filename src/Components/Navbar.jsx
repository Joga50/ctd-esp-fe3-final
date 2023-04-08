import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "./utils/global.context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const { theme, setTheme } = useContext(ContextGlobal);

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <nav >
      <div className="dhLogo">
        <Link to="/">
        <img
          src="./images/DH.png"
          alt="img"
          style={{ height: "50px", margin: "15px" }}
        />
        </Link>
      </div>
      <div className="navRoutes">
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/favs">Favs</Link>
        {/* Use Font Awesome icons for the theme toggle button */}
        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === "light" ? (
            <FontAwesomeIcon icon={faMoon}style={{color: "white"}} />
          ) : (
            <FontAwesomeIcon icon={faSun} style={{color: "white"}} />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
