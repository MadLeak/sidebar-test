import React, { useRef, useState  } from "react";
import logo from "./logo.png";
import "./App.css";
import {
  BiBarChartAlt2,
  BiBell,
  BiChevronRight,
  BiHeart,
  BiHomeAlt,
  BiLogOut,
  BiMoon,
  BiPieChartAlt,
  BiSearch,
  BiSun,
  BiWallet,
} from "react-icons/bi";

const App = () => {
  const [DarkMode, setDarkMode] = useState(false);
  const [MenuClosed, setMenuClosed] = useState(false);
    
  const handleDarkMode = () => {
    setDarkMode((value) => !value);
    if (!DarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  };

  const handleToggleMenu = () => {
    setMenuClosed((value) => !value);
    // if (MenuClosed) {
    //   document.body.classList.add("close");
    // } else {
    //   document.body.classList.remove("close");
    // }
  };

  return (
    <>
      <nav className={`sidebar${MenuClosed ? "" : " close"}`}>
        <header>
          <div className="image-text">
            <span className="image">
              <img src={logo} alt="logo" />
            </span>
            <div className="text header-text">
              <span className="name">MadLeak</span>
              <span className="profession">Devlopment</span>
            </div>
          </div>
          <BiChevronRight
            className="toggle icon"
            onClick={handleToggleMenu}
          />
        </header>
        <div className="menu-bar">
          <div className="menu">
            <li className="search-box">
              <BiSearch className="icon search-icon" onClick={() => setMenuClosed(true)} />
              <input type="text" name="search" placeholder="Search..." />
            </li>
            <ul className="menu-links">
              <li className="nav-link">
                <a href="#">
                  <BiHomeAlt className="icon nav-icon" />
                  <span className="text nav-text">Home</span>
                </a>
              </li>
              <li className="nav-link">
                <a href="#">
                  <BiBarChartAlt2 className="icon nav-icon" />
                  <span className="text nav-text">Revenue</span>
                </a>
              </li>
              <li className="nav-link">
                <a href="#">
                  <BiBell className="icon nav-icon" />
                  <span className="text nav-text">Notifications</span>
                </a>
              </li>
              <li className="nav-link">
                <a href="#">
                  <BiPieChartAlt className="icon nav-icon" />
                  <span className="text nav-text">Analitycs</span>
                </a>
              </li>
              <li className="nav-link">
                <a href="#">
                  <BiHeart className="icon nav-icon" />
                  <span className="text nav-text">Likes</span>
                </a>
              </li>
              <li className="nav-link">
                <a href="#">
                  <BiWallet className="icon nav-icon" />
                  <span className="text nav-text">Wallet</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="bottom-contnent">
            <li className="nav-link">
              <a href="#">
                <BiLogOut className="icon nav-icon" />
                <span className="text nav-text">Logout</span>
              </a>
            </li>
            <li className="mode">
              <div className="moon-sun">
                {!DarkMode ? (
                  <BiMoon className="icon moon" />
                ) : (
                  <BiSun className="icon sun" />
                )}
              </div>
              <span className="mode-text text">
                {!DarkMode ? "Dark Mode" : "Ligth Mode"}
              </span>
              <div className="toggle-dark-mode" onClick={handleDarkMode}>
                <span className={`switch${DarkMode ? " dark" : ""}`}></span>
              </div>
            </li>
          </div>
        </div>
      </nav>
      <section className="home">
        <div className="text">Dashboards</div>
      </section>
    </>
  );
};

export default App;
