import React, { useRef, useState } from "react";
import useClickOutside from '../../useClickOutside';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./Navbar.css";
import { IconContext } from "react-icons";
import yellowlogo_lightbg from "./yellowlogo_lightbg.png";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  let location = useLocation();
  const showSidebar = () => setSidebar(!sidebar);

  const ref = useRef(null);
  useClickOutside(ref, () => setSidebar(false));

  const path = location.pathname.substr(1).toUpperCase();
  return (
    <div>
      <IconContext.Provider value={{ color: "#fec701" }}>
        <div ref={ref} className="full">
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
                  width="108px"
                  height="75px"
                />
              </Link>
            </div>
            <p className="npath">{path}</p>
            {!sidebar ? (
              <Link to="#" className="menu-bars">
                <FaIcons.FaBars onClick={showSidebar} />
              </Link>
            ) : (
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose onClick={showSidebar} />
              </Link>
            )}
          </div>
        </div>
      </IconContext.Provider>
    </div>
  );
}

export default Navbar;
