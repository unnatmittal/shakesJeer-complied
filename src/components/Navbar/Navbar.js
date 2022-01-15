import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./Navbar.css";
import { IconContext } from "react-icons";
import logo from "./logo.png";
import lightblue_darkbg from "./lightblue_darkbg.png";
import yellowlogo_lightbg from "./yellowlogo_lightbg.png";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  let location = useLocation();
  const showSidebar = () => setSidebar(!sidebar);
  console.log(location.pathname);
  const path = location.pathname.substr(1).toUpperCase();
  return (
    <>
      <IconContext.Provider value={{ color: "#fec701" }}>
        <div className="full">
          <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
            <ul className="nav-menu-items" onClick={showSidebar}>
              <li className="navbar-toggle">
                <Link to="#" className="menu-bars">
                  <AiIcons.AiOutlineClose />
                </Link>
              </li>
              {SidebarData.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    <Link to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className="navbar">
            <div className="logo">
              <Link to="/">
                <img
                  src={yellowlogo_lightbg}
                  alt="logo"
                  width="110px"
                  height="75px"
                />
              </Link>
            </div>
            <p className="npath">{path}</p>
            <Link to="#" className="menu-bars">
              <FaIcons.FaBars onClick={showSidebar} />
            </Link>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
