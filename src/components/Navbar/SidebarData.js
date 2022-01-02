import React from "react";
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import * as ImIcons from "react-icons/im";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <FaIcons.FaHome />,
    cName: "nav-text",
  },
  {
    title: "About",
    path: "/about",
    icon: <RiIcons.RiTeamFill />,
    cName: "nav-text",
  },
  {
    title: "Events",
    path: "/events",
    icon: <IoIcons.IoIosTv />,
    cName: "nav-text",
  },
  {
    title: "ShakesJournal",
    path: "/shakesjournal",
    icon: <ImIcons.ImNewspaper />,
    cName: "nav-text",
  },
  {
    title: "Resources",
    path: "/resources",
    icon: <IoIcons.IoIosJournal />,
    cName: "nav-text",
  },
  {
    title: "Contact Us",
    path: "/contact-us",
    icon: <RiIcons.RiContactsFill />,
    cName: "nav-text",
  },
];
